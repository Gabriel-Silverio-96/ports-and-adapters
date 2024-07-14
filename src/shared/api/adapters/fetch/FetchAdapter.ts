import { API } from "src/app.constants.ts";
import {
  HttpClientConfig,
  HttpClientResponse,
} from "src/shared/api/types/ApiAdapter.types";
import FetchErrorHandler from "src/shared/api/adapters/fetch/utils/fetch-error-handler";

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
