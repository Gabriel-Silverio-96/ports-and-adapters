import { Get } from "../../types/api-adapter.types";
import axios from "axios";
import { API } from "../../../../app.constants";

const AxiosInstance = axios.create({ baseURL: API.BASE_URL });

export default class AxiosAdapter {
  async get({ endpoint }: Get) {
    return await AxiosInstance.get(endpoint);
  }
}
