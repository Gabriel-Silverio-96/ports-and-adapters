import { API } from "../../../../app.constants";
import { HttpClientResponse } from "../../types/ApiAdapter.types";
import FetchErrorHandler from "./utils/fetch-error-handler";

export default class FetchAdapter {
  async get<T>(endpoint: string): Promise<HttpClientResponse<T>> {
    const response = await fetch(`${API.BASE_URL}${endpoint}`, {
      method: "GET",
    });

    FetchErrorHandler.ResponseError(response);
    const data = await response.json();

    return { data };
  }
}
