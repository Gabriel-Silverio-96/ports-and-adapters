import { API } from "../../../../app.constants";
import { Get, GetReponse } from "../../types/api-adapter.types";
import FetchErrorHandler from "./utils/fetch-error-handler";

class FetchAdapter {
  async get<T>({ endpoint }: Get): Promise<GetReponse<T>> {
    const response = await fetch(`${API.BASE_URL}${endpoint}`, {
      method: "GET",
    });

    FetchErrorHandler.ResponseError(response);
    const data = await response.json();

    return { data };
  }
}

export default FetchAdapter;
