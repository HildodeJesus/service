import { OrderType } from "@/common/constants/OrderType";

export function handleShowOrderType(unit: string) {
	return unit == OrderType.DINE_IN
		? "Presencial"
		: unit == OrderType.DELIVERY
		? "Entrega"
		: "Retirada";
}
