import { IPaginationClient } from "@/common/interfaces/Pagination";
import { Pagination } from "@/utils/Pagination";
import { AxiosInstance } from "axios";
import { axiosInstance } from "./axios";
import { CreateDishInput } from "@/common/schemas/dish";

export class DishesApi {
	private axiosInstance: AxiosInstance;
	constructor(subdomain: string) {
		this.axiosInstance = axiosInstance(subdomain);
	}

	async create(data: CreateDishInput) {
		const res = await this.axiosInstance.post("/dishes", data);

		if (res.status >= 200 && res.status < 400) return res.data;

		throw res.data;
	}

	async update(id: string, data: Partial<CreateDishInput>) {
		const res = await this.axiosInstance.put(`/dishes/${id}`, data);

		if (res.status >= 200 && res.status < 400) return res.data;

		throw res.data;
	}

	async getAll(pagination: IPaginationClient, search?: string) {
		const query = Pagination.getQuery(pagination);
		const url =
			search && search?.length > 2
				? `/dishes?search=${search}&${query}`
				: `/dishes?${query}`;

		const res = await this.axiosInstance.get(url);

		console.log(res);

		if (res.status >= 200 && res.status < 400) return res.data;

		throw res.data;
	}

	async delete(id: string) {
		console.log(id);
		const res = await this.axiosInstance.delete(`/dishes/${id}`);

		if (res.status >= 200 && res.status < 300) return res.data;

		throw res.data;
	}

	async getOne(id: string) {
		const res = await this.axiosInstance.get(`/dishes/${id}`);

		if (res.status >= 200 && res.status < 400) return res.data;

		throw res.data;
	}
}
