import { HttpClientResponse } from "../../types/ApiAdapter.types";

export interface HttpClient {
  get<T>(endpoint: string): Promise<HttpClientResponse<T>>;
}
