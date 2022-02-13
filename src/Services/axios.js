import axios from "axios";
// import redirect from "../helpers/redirect";
import { getCookie, removeCookie, setCookie } from "../helpers/session";

export const baseURL = "https://reqres.in/api";

const API = axios.create({
	baseURL,
	headers: {
		"Content-Type": "application/json",
		accesstoken: getCookie("accessToken", {}),
		refreshtoken: getCookie("refreshToken", {}),
	},
});

export default API;

function createAxiosResponseInterceptor() {
	const interceptor = API.interceptors.response.use(
		(response) => response,
		(error) => {
			// Reject promise if usual error
			if (error.response.status !== 401) {
				return Promise.reject(error);
			}

			/*
			 * When response code is 401, try to refresh the token.
			 * Eject the interceptor so it doesn't loop in case
			 * token refresh causes the 401 response
			 */
			API.interceptors.response.eject(interceptor);

			return API.post("/user/api/v2/refresh-token/")
				.then((response) => {
					setCookie(response.data.refreshToken);
					setCookie(response.data.accessToken);
					error.config.headers["accessToken"] = response.data.accessToken;
					return API(error.config);
				})
				.catch((error) => {
					removeCookie("refreshToken");
					removeCookie("accessToken");
					// redirect("/");
					return Promise.reject(error);
				})
				.finally(createAxiosResponseInterceptor);
		}
	);
}

createAxiosResponseInterceptor();
