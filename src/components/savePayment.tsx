"use client";

import { Edit2, PlusCircle } from "lucide-react";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./ui/dialog";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Label } from "./ui/label";

import { Button } from "./ui/button";
import { ApiResponse } from "@/utils/ApiResponse";
import { toast } from "sonner";
import { useState } from "react";
import { useSession } from "next-auth/react";

import clsx from "clsx";
import {
	CreatePaymentInput,
	createPaymentSchema,
} from "@/common/schemas/payment";
import { IPayment } from "@/common/interfaces/Payment";
import { PaymentMethod } from "@/common/constants/PaymentMethod";
import { PaymentStatus } from "@/common/constants/PaymentStatus";
import { PaymentApi } from "@/lib/api/Payment";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/select";
import { handleShowPaymentMethod } from "@/utils/handleShowPaymentMethod";

interface SavePaymentProps {
	defaultValue?: Partial<IPayment>;
	onAction?: () => Promise<void>;
	style?: "outline" | "solid";
}

const triggerStyle = {
	outline:
		"border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white",
	solid: "bg-orange-500 hover:bg-orange-600 text-white",
};

export default function SavePayment({
	defaultValue,
	style = "solid",
	onAction,
}: SavePaymentProps) {
	const { data: sessionData } = useSession();
	const [isSubmiting, setIsSubmiting] = useState(false);

	const {
		handleSubmit,
		reset,
		setValue,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(createPaymentSchema),
		defaultValues: {
			amount: Number(defaultValue?.amount) || 0,
			billId: defaultValue?.billId || "",
			paymentMethod: defaultValue?.paymentMethod || PaymentMethod.CASH,
			status: defaultValue?.status || PaymentStatus.PENDING,
		},
	});

	const onSubmit: SubmitHandler<CreatePaymentInput> = async data => {
		try {
			setIsSubmiting(true);
			if (!sessionData?.user.name) return;

			const api = new PaymentApi(sessionData?.user.name);

			await api.create({ ...data });
			toast("Comanda paga com sucesso!");

			reset();
			if (onAction) await onAction();
		} catch (e) {
			if (e instanceof ApiResponse) toast(e.message);
		} finally {
			setIsSubmiting(false);
		}
	};

	return (
		<>
			<Dialog>
				<DialogTrigger
					className={clsx(
						"whitespace-nowrap transition-colors flex items-center py-2 text-sm px-3 gap-3 rounded-lg font-bold",
						triggerStyle[style as keyof typeof triggerStyle]
					)}
				>
					{defaultValue ? <Edit2 className="size-4" /> : <PlusCircle />}
					Pagando
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>
							{defaultValue ? "Editar pagamento" : "Pagar"}
						</DialogTitle>
					</DialogHeader>

					<form
						onSubmit={handleSubmit(onSubmit)}
						className="grid grid-cols-2 gap-3"
					>
						<div className="col-span-2">
							<Label htmlFor="name">Metodo de pagamento</Label>
							<Select
								onValueChange={e =>
									setValue("paymentMethod", e as PaymentMethod)
								}
							>
								<SelectTrigger>
									<SelectValue placeholder="Selecione o metodo de pagamento" />
								</SelectTrigger>

								<SelectContent>
									{Object.keys(PaymentMethod).map(method => (
										<SelectItem
											key={method}
											value={
												PaymentMethod[method as keyof typeof PaymentMethod]
											}
										>
											{handleShowPaymentMethod(
												PaymentMethod[method as keyof typeof PaymentMethod]
											)}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
							{errors.paymentMethod && (
								<span className="text-red-500 text-sm">
									{errors.paymentMethod.message}
								</span>
							)}
						</div>
						<div className="col-span-2">
							<Label htmlFor="name">Status do pagamento</Label>
							<Select
								onValueChange={e => setValue("status", e as PaymentStatus)}
							>
								<SelectTrigger>
									<SelectValue placeholder="Selecione o metodo de pagamento" />
								</SelectTrigger>

								<SelectContent>
									{Object.keys(PaymentStatus).map(method => (
										<SelectItem
											key={method}
											value={
												PaymentStatus[method as keyof typeof PaymentStatus]
											}
										>
											{PaymentStatus[method as keyof typeof PaymentStatus] ==
											"paid"
												? "pago"
												: "pendente"}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
							{errors.paymentMethod && (
								<span className="text-red-500 text-sm">
									{errors.paymentMethod.message}
								</span>
							)}
						</div>

						<Button
							type="submit"
							disabled={isSubmiting}
							className={`ml-auto col-span-2 font-bold ${
								isSubmiting
									? "bg-orange-400"
									: "bg-orange-500 hover:bg-orange-600"
							}`}
						>
							{isSubmiting ? "Pagando..." : "Pagando"}
						</Button>
					</form>
				</DialogContent>
			</Dialog>
		</>
	);
}
