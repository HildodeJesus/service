import { BillStatus } from "../constants/BillStatus";
export interface IBill {
	id: string;
	tableId?: string;
	clientId?: string;
	status: BillStatus;
	total: number;
	createdAt: Date;
	updatedAt: Date;
}
