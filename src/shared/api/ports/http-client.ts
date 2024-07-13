import { Get, GetReponse } from "../types/api-adapter.types";

export interface HttpClient {
  get<T>({ endpoint }: Get): Promise<GetReponse<T>>;
}
