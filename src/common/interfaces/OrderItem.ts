export interface IOrderItem {
	id: string;
	orderId: string;
	dishId: string;
	quantity: number;
	price: number;
	createdAt: Date;
	updatedAt: Date;
}
