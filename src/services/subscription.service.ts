// src/services/subscription.service.ts
import { GetPrismaClient } from "@/utils/getPrismaClient";
import Stripe from "stripe";
import { Company, PrismaClient } from "../../prisma/generated/main";
import { SubscriptionStatus } from "@/common/constants/SubscriptionStatus";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
	apiVersion: "2025-02-24.acacia",
});

export class SubscriptionService {
	private prisma: PrismaClient;
	constructor() {
		this.prisma = GetPrismaClient.main();
	}
	async createCustomer(companyId: string): Promise<Company> {
		const company = await this.prisma.company.findUnique({
			where: { id: companyId },
		});

		if (!company) {
			throw new Error("Empresa não encontrada");
		}

		if (company.stripeCustomerId) {
			return company;
		}

		const customer = await stripe.customers.create({
			email: company.email,
			name: company.name,
			metadata: {
				companyId: company.id,
			},
		});

		return this.prisma.company.update({
			where: { id: companyId },
			data: {
				stripeCustomerId: customer.id,
			},
		});
	}

	async createCheckoutSession(
		companyId: string,
		successUrl: string,
		cancelUrl: string
	): Promise<string> {
		const company = await this.prisma.company.findUnique({
			where: { id: companyId },
		});

		if (!company) {
			throw new Error("Empresa não encontrada");
		}

		if (!company.stripeCustomerId) {
			const updatedCompany = await this.createCustomer(companyId);
			company.stripeCustomerId = updatedCompany.stripeCustomerId;
		}

		const session = await stripe.checkout.sessions.create({
			customer: company.stripeCustomerId as string,
			payment_method_types: ["card"],
			mode: "subscription",
			line_items: [
				{
					price: process.env.STRIPE_PRICE_ID as string,
					quantity: 1,
				},
			],
			success_url: successUrl,
			cancel_url: cancelUrl,
			metadata: {
				companyId: company.id,
			},
		});

		return session.url as string;
	}

	async handleWebhook(event: Stripe.Event): Promise<void> {
		switch (event.type) {
			case "checkout.session.completed": {
				const session = event.data.object as Stripe.Checkout.Session;
				if (session.mode === "subscription" && session.metadata?.companyId) {
					await this.updateSubscriptionStatus(
						session.metadata.companyId,
						SubscriptionStatus.ACTIVE
					);
				}
				break;
			}
			case "customer.subscription.updated": {
				const subscription = event.data.object as Stripe.Subscription;
				const customer = await stripe.customers.retrieve(
					subscription.customer as string
				);
				if (
					customer &&
					!customer.deleted &&
					"metadata" in customer &&
					customer.metadata.companyId
				) {
					if (subscription.status === "active") {
						await this.updateSubscriptionStatus(
							customer.metadata.companyId,
							SubscriptionStatus.ACTIVE
						);
					} else if (
						subscription.status === "canceled" ||
						subscription.status === "unpaid"
					) {
						await this.updateSubscriptionStatus(
							customer.metadata.companyId,
							SubscriptionStatus.INACTIVE
						);
					}
				}
				break;
			}
			case "customer.subscription.deleted": {
				const subscription = event.data.object as Stripe.Subscription;
				const customer = await stripe.customers.retrieve(
					subscription.customer as string
				);
				if (
					customer &&
					!customer.deleted &&
					"metadata" in customer &&
					customer.metadata.companyId
				) {
					await this.updateSubscriptionStatus(
						customer.metadata.companyId,
						SubscriptionStatus.INACTIVE
					);
				}
				break;
			}
		}
	}

	private async updateSubscriptionStatus(
		companyId: string,
		status: SubscriptionStatus
	): Promise<Company> {
		return this.prisma.company.update({
			where: { id: companyId },
			data: { subscriptionStatus: status },
		});
	}

	async cancelSubscription(companyId: string): Promise<Company> {
		const company = await this.prisma.company.findUnique({
			where: { id: companyId },
		});

		if (!company || !company.stripeCustomerId) {
			throw new Error("Empresa não encontrada ou sem assinatura");
		}

		const subscriptions = await stripe.subscriptions.list({
			customer: company.stripeCustomerId,
			status: "active",
		});

		for (const subscription of subscriptions.data) {
			await stripe.subscriptions.cancel(subscription.id);
		}

		// Atualiza o status no banco de dados
		return this.updateSubscriptionStatus(
			companyId,
			SubscriptionStatus.INACTIVE
		);
	}

	async reactivateSubscription(companyId: string): Promise<Company> {
		const company = await this.prisma.company.findUnique({
			where: { id: companyId },
		});

		if (!company || !company.stripeCustomerId) {
			throw new Error("Empresa não encontrada ou sem customer ID");
		}

		const subscriptions = await stripe.subscriptions.list({
			customer: company.stripeCustomerId,
			status: "canceled",
		});

		if (subscriptions.data.length === 0) {
			await stripe.subscriptions.create({
				customer: company.stripeCustomerId,
				items: [
					{
						price: process.env.STRIPE_PRICE_ID as string,
					},
				],
			});
		} else {
			await stripe.subscriptions.update(subscriptions.data[0].id, {
				cancel_at_period_end: false,
				items: [
					{
						id: subscriptions.data[0].items.data[0].id,
						price: process.env.STRIPE_PRICE_ID as string,
					},
				],
			});
		}

		return this.updateSubscriptionStatus(companyId, SubscriptionStatus.ACTIVE);
	}

	async getSubscriptionInfo(companyId: string): Promise<{
		status: SubscriptionStatus;
		details: Stripe.Subscription | null;
	}> {
		const company = await this.prisma.company.findUnique({
			where: { id: companyId },
		});

		if (!company) {
			throw new Error("Empresa não encontrada");
		}

		if (!company.stripeCustomerId) {
			return {
				status: company.subscriptionStatus as SubscriptionStatus,
				details: null,
			};
		}

		const subscriptions = await stripe.subscriptions.list({
			customer: company.stripeCustomerId,
			expand: ["data.default_payment_method"],
		});

		return {
			status: company.subscriptionStatus as SubscriptionStatus,
			details: subscriptions.data[0] || null,
		};
	}
}

export const subscriptionService = new SubscriptionService();
