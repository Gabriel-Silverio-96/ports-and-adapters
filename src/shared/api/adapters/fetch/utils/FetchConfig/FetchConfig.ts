import { HttpClientConfig } from "src/shared/api/types";

class FetchConfig {
  static format(config: HttpClientConfig) {
    const { headers, payload } = config;

    return {
      headers,
      body: payload,
    };
  }
}

export default FetchConfig;
