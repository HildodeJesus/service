import { IDish } from "./Dish";
import { IOrder } from "./Order";

export interface IOrderItem {
	id?: string;
	orderId?: string;
	dishId?: string;
	dish?: IDish;
	order?: IOrder;
}
