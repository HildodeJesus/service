import axios from "axios";

export function axiosInstance(subdomain?: string) {
	const url = subdomain ? `/${subdomain}/api/` : `/api`;
	return axios.create({ baseURL: url });
}
