import { IBill } from "./Bill";
import { IBillItem } from "./BillItem";
import { IClient } from "./Client";

export interface IBillWithItems extends IBill {
	billItems: IBillItem[];
	client: IClient;
}
