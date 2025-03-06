import { IBill } from "./Bill";
import { IOrder } from "./Order";

export interface IBillItem {
	id: string;
	billId: string;
	bill?: IBill;
	order?: IOrder;
	orderId: string;
}
