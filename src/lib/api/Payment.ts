import { IPaginationClient } from "@/common/interfaces/Pagination";
import { Pagination } from "@/utils/Pagination";
import { AxiosInstance } from "axios";
import { axiosInstance } from "./axios";
import { CreatePaymentInput } from "@/common/schemas/payment";

export class PaymentApi {
	private axiosInstance: AxiosInstance;
	constructor(subdomain: string) {
		this.axiosInstance = axiosInstance(subdomain);
	}

	async create(data: CreatePaymentInput) {
		const res = await this.axiosInstance.post("/payments", data);

		if (res.status >= 200 && res.status < 400) return res.data;

		throw res.data;
	}

	async update(id: string, data: Partial<CreatePaymentInput>) {
		const res = await this.axiosInstance.put(`/payments/${id}`, data);

		if (res.status >= 200 && res.status < 400) return res.data;

		throw res.data;
	}

	async getAll(pagination: IPaginationClient, search?: string) {
		const query = Pagination.getQuery(pagination);
		const url =
			search && search?.length > 2
				? `/payments?search=${search}&${query}`
				: `/payments?${query}`;

		const res = await this.axiosInstance.get(url);

		console.log(res);

		if (res.status >= 200 && res.status < 400) return res.data;

		throw res.data;
	}

	async delete(id: string) {
		console.log(id);
		const res = await this.axiosInstance.delete(`/payments/${id}`);

		if (res.status >= 200 && res.status < 300) return res.data;

		throw res.data;
	}

	async getOne(id: string) {
		const res = await this.axiosInstance.get(`/payments/${id}`);

		if (res.status >= 200 && res.status < 400) return res.data;

		throw res.data;
	}
}
