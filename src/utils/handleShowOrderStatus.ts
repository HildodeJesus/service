import { OrderStatus } from "@/common/constants/OrderStatus";

export function handleShowOrderStatus(unit: string) {
	return unit == OrderStatus.CANCELED
		? "Cancelado"
		: unit == OrderStatus.PENDING
		? "Pendente"
		: unit == OrderStatus.DELIVERED
		? "Entregue"
		: "Em Preparação";
}
