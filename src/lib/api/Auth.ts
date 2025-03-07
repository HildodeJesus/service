import { CreateCompanyInput } from "@/common/schemas/company";
import axios, { AxiosInstance } from "axios";

export class Auth {
	private axiosInstance: AxiosInstance;
	constructor() {
		this.axiosInstance = axios.create({
			baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}/api`,
		});
	}
	async create(data: CreateCompanyInput) {
		const res = await this.axiosInstance.post("/auth/register", data);

		return res.data;
	}
}
