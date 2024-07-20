import axios from "axios";
import { API } from "src/app.constants";

const AxiosInstance = axios.create({ baseURL: API.BASE_URL });

export { AxiosInstance };
