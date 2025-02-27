import { SubscriptionStatus } from "../constants/SubscriptionStatus";

export interface ICompany {
	id: string;
	name: string;
	email: string;
	password: string;
	stripeCustomerId: string | null;
	subscriptionStatus: SubscriptionStatus;
	createdAt: Date;
	updatedAt: Date;
}
