import ApiPort from "../../ports/api/api-port";
import { Get, GetReponse } from "./api-adapter.types";
import AxiosInstance from "./instance/axios-instance";
import FetchInstance from "./instance/fetch-instance";
import FetchErrorHandler from "./utils/fetch-error-handler";

class ApiAdapter extends ApiPort {
  static async get({ endpoint }: Get): Promise<GetReponse> {
    // Lib Axios
    const { data } = await AxiosInstance.get(endpoint);

    // Fetch API
    // const response = await FetchInstance.fetch(endpoint, { method: "GET" });
    // FetchErrorHandler.ResponseError(response);
    // const data = await response.json();

    return { data };
  }
}

export default ApiAdapter;
