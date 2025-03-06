/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiResponse } from "@/utils/ApiResponse";
import { IBill } from "../interfaces/Bill";
import { IOrder } from "../interfaces/Order";
import { ITable } from "../interfaces/Table";
import { IClient } from "../interfaces/Client";
import { PaginatedResponse } from "@/utils/PaginatedResponse";

export interface ApiBillGetOne extends ApiResponse<any> {
	data: IBill & {
		table: ITable | null;
		client: IClient | null;
		billItems: {
			order: IOrder;
		}[];
	};
}

export interface ApiBillGetMany extends PaginatedResponse<any> {
	data: IBill & {
		client: IClient;
		billItems: {
			order: IOrder;
		}[];
	};
}

export interface ApiBillCreate extends ApiResponse<any> {
	data: ApiBillGetOne["data"];
}

export interface ApiBillUpdate extends ApiResponse<any> {
	data: ApiBillGetOne["data"];
}

export interface ApiBillDelete extends ApiResponse<any> {
	data: null;
}
