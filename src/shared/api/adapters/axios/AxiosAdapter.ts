import axios from "axios";
import { API } from "../../../../app.constants";
import { HttpClientConfig, HttpClientResponse } from "../../types";

const AxiosInstance = axios.create({ baseURL: API.BASE_URL });

export default class AxiosAdapter {
  async get<T, D>(
    endpoint: string,
    config?: HttpClientConfig<D>
  ): Promise<HttpClientResponse<T>> {
    return await AxiosInstance.get(endpoint, { ...config });
  }
}
