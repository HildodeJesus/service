import { IPaginationClient } from "@/common/interfaces/Pagination";
import { Pagination } from "@/utils/Pagination";
import { AxiosInstance } from "axios";
import { axiosInstance } from "./axios";
import { CreateClientInput } from "@/common/schemas/client";

export class ClientsApi {
	private axiosInstance: AxiosInstance;
	constructor(subdomain: string) {
		this.axiosInstance = axiosInstance(subdomain);
	}

	async create(data: CreateClientInput) {
		const res = await this.axiosInstance.post("/clients", data);

		if (res.status >= 200 && res.status < 400) return res.data;

		throw res.data;
	}

	async update(id: string, data: Partial<CreateClientInput>) {
		const res = await this.axiosInstance.put(`/clients/${id}`, data);

		if (res.status >= 200 && res.status < 400) return res.data;

		throw res.data;
	}

	async getAll(pagination?: IPaginationClient, search?: string) {
		let query;
		if (pagination) query = Pagination.getQuery(pagination);
		const url =
			search && search?.length > 2
				? `/clients?search=${search}&${query}`
				: `/clients?${query}`;

		const res = await this.axiosInstance.get(url);

		if (res.status >= 200 && res.status < 400) return res.data;

		throw res.data;
	}

	async delete(id: string) {
		console.log(id);
		const res = await this.axiosInstance.delete(`/clients/${id}`);

		if (res.status >= 200 && res.status < 300) return res.data;

		throw res.data;
	}

	async getOne(id: string) {
		const res = await this.axiosInstance.get(`/clients/${id}`);

		if (res.status >= 200 && res.status < 400) return res.data;

		throw res.data;
	}
}
