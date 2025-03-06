import { IPaginationClient } from "@/common/interfaces/Pagination";
import { Pagination } from "@/utils/Pagination";
import { AxiosInstance } from "axios";
import { axiosInstance } from "./axios";
import { CreateOrderInput } from "@/common/schemas/order";

export class OrdersApi {
	private axiosInstance: AxiosInstance;
	constructor(subdomain: string) {
		this.axiosInstance = axiosInstance(subdomain);
	}

	async create(data: CreateOrderInput) {
		const res = await this.axiosInstance.post("/orders", data);

		if (res.status >= 200 && res.status < 400) return res.data;

		throw res.data;
	}

	async update(id: string, data: Partial<CreateOrderInput>) {
		const res = await this.axiosInstance.put(`/orders/${id}`, data);

		if (res.status >= 200 && res.status < 400) return res.data;

		throw res.data;
	}

	async getAll(
		pagination?: IPaginationClient,
		status?: string,
		tableId?: string
	) {
		let query;
		if (pagination)
			query = Pagination.getQuery({ ...pagination, status, tableId });
		const url = `/orders?${query}`;

		const res = await this.axiosInstance.get(url);

		if (res.status >= 200 && res.status < 400) return res.data;

		throw res.data;
	}

	async delete(id: string) {
		console.log(id);
		const res = await this.axiosInstance.delete(`/orders/${id}`);

		if (res.status >= 200 && res.status < 300) return res.data;

		throw res.data;
	}

	async getOne(id: string) {
		const res = await this.axiosInstance.get(`/orders/${id}`);

		if (res.status >= 200 && res.status < 400) return res.data;

		throw res.data;
	}
}
