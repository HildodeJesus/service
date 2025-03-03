import axios from "axios";

export function axiosInstance(subdomain?: string) {
	const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
	const url = subdomain
		? `http://${subdomain}.${baseURL}/api`
		: `http://${baseURL}/api`;
	return axios.create({ baseURL: url });
}
