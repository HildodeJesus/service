import { CreateCompanyInput } from "@/common/schemas/company";
import { axiosInstance } from "./axios";
import { AxiosInstance } from "axios";

export class Auth {
	private axios: AxiosInstance;
	constructor() {
		this.axios = axiosInstance;
	}
	async create(data: CreateCompanyInput) {
		const res = await this.axios.post("/auth/register", data);

		return res.data;
	}
}
