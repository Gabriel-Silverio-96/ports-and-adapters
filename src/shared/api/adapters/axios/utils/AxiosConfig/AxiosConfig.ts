import { HttpClientConfig } from "src/shared/api/types";

class AxiosConfig {
  static format(config: HttpClientConfig) {
    const { headers, payload } = config;

    return {
      headers,
      data: payload,
    };
  }
}

export { AxiosConfig };
