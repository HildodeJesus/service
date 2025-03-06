import { Order } from "../../../prisma/generated/tenant";
import { IClient } from "./Client";
import { IDish } from "./Dish";
import { ITable } from "./Table";

export interface items {
	dish: IDish;
	quantity: number;
}

export interface IOrderWithItems extends Order {
	orderItems: items[];
	client: IClient;
	table?: ITable;
}
