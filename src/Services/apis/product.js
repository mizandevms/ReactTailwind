import API from "../axios";
import { toQueryString } from "../../helpers/toQueryString";

const ProductAPI = {
	readList: (query) =>
		API.get("/users" + toQueryString(query))
			.then((res) => res)
			.catch((error) => ({ error })),
};

export default ProductAPI;
