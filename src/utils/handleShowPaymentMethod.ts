import { PaymentMethod } from "@/common/constants/PaymentMethod";

export function handleShowPaymentMethod(unit: string) {
	return unit == PaymentMethod.CARD
		? "Cartão de crédito"
		: unit == PaymentMethod.CASH
		? "Dinheiro"
		: "Pix";
}
