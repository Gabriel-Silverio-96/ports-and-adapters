import { Get, GetReponse } from "../types/api-adapter.types";

export interface HttpClient {
  get({ endpoint }: Get): Promise<GetReponse>;
}
