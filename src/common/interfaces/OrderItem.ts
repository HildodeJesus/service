import { IBill } from "./Bill";
import { IOrder } from "./Order";

export interface IOrderItem {
	id?: string;
	orderId?: string;
	billId?: string;
	bill?: IBill;
	order?: IOrder;
}
