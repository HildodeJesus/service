import axios from "axios";

export function axiosInstance(subdomain?: string) {
	const baseURL = process.env.BASE_DOMAIN;
	const url = subdomain
		? `http://${subdomain}.${baseURL}/api`
		: `http://${baseURL}/api`;
	return axios.create({ baseURL: url });
}
