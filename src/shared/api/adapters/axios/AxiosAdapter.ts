import { HttpClientConfig, HttpClientResponse } from "../../types";
import AxiosInstance from "./config/AxiosInstance";

export default class AxiosAdapter {
  async get<T, D>(
    endpoint: string,
    config?: HttpClientConfig<D>
  ): Promise<HttpClientResponse<T>> {
    return await AxiosInstance.get(endpoint, { ...config });
  }
}
