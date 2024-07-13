import { API } from "../../../../app.constants";
import {
  HttpClientConfig,
  HttpClientResponse,
} from "../../types/ApiAdapter.types";
import FetchErrorHandler from "./utils/fetch-error-handler";

export default class FetchAdapter {
  async get<T, D>(
    endpoint: string,
    config?: HttpClientConfig<D>
  ): Promise<HttpClientResponse<T>> {
    const response = await fetch(`${API.BASE_URL}${endpoint}`, {
      method: "GET",
      ...config,
    });

    FetchErrorHandler.ResponseError(response);
    const data = await response.json();

    return { data };
  }
}
