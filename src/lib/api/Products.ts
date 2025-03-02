/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance } from "axios";
import {
	CreateProductInput,
	UpdateProductInput,
} from "@/common/schemas/product";
import { IPaginationClient } from "@/common/interfaces/Pagination";
import { Pagination } from "@/utils/Pagination";

export class ProductsApi {
	private axiosInstance: AxiosInstance;
	constructor(subdomain: string) {
		this.axiosInstance = axios.create({
			baseURL: `http://${subdomain}.${process.env.NEXT_PUBLIC_BASE_URL}/api`,
		});
	}
	async create(data: CreateProductInput) {
		try {
			const res = await this.axiosInstance.post("/products", data);

			if (res.status >= 200 && res.status < 400) return res.data;
		} catch (e: any) {
			throw e.data;
		}
	}

	async update(id: string, data: UpdateProductInput) {
		try {
			const res = await this.axiosInstance.put(`/products/${id}`, data);

			if (res.status >= 200 && res.status < 400) return res.data;
		} catch (e: any) {
			throw e.data;
		}
	}

	async getAll(pagination: IPaginationClient, search?: string) {
		const query = Pagination.getQuery(pagination);
		const url =
			search && search?.length > 2
				? `/products?search=${search}&${query}`
				: `/products?${query}`;

		const res = await this.axiosInstance.get(url);

		if (res.status >= 200 && res.status < 400) return res.data;

		throw res.data;
	}
}
