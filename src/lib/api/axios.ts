import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: `http://${process.env.NEXT_PUBLIC_BASE_URL}/api/`,
});
