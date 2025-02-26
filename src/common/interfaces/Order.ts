import { OrderStatus } from "../constants/OrderStatus";
import { OrderType } from "../constants/OrderType";

export interface IOrder {
	id: string;
	tableId?: string;
	clientId?: string;
	orderType: OrderType;
	status: OrderStatus;
	createdAt: Date;
	updatedAt: Date;
}
