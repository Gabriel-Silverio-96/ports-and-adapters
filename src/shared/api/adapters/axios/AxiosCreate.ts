import axios from "axios";
import { API } from "src/app.constants";

const AxiosCreate = axios.create({ baseURL: API.BASE_URL });

export { AxiosCreate };
