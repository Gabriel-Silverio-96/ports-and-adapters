import AxiosAdapter from "../../api/adapters/axios";
import FetchAdapter from "../../api/adapters/fetch";
import ApiPort from "../../api/ports/ApiPort";

export function useApi() {
  const adapter = new AxiosAdapter();
  // const adapter = new FetchAdapter();
  const api = new ApiPort(adapter);

  return api;
}
