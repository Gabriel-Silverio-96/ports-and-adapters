import { API } from "../../../../app.constants";

class FetchInstance {
  static async fetch(endpoint: string, init?: RequestInit): Promise<Response> {
    return await fetch(`${API.BASE_URL}${endpoint}`, init);
  }
}

export default FetchInstance;
