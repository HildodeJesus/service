import { BillStatus } from "../constants/BillStatus";
import { IClient } from "./Client";
import { ITable } from "./Table";

export interface IBill {
	id: string;
	tableId?: string;
	table?: ITable;
	clientId?: string;
	client?: IClient;
	status: BillStatus;
	total: number;
	createdAt: Date;
	updatedAt: Date;
}
