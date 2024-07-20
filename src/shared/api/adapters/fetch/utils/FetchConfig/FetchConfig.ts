import { HttpClientConfig } from "src/shared/api/types";

class FetchConfig {
  static format(config: HttpClientConfig) {
    const { headers, payload } = config;
    const body = FetchConfig.safeStringify(payload);

    return {
      headers,
      body,
    };
  }

  static safeStringify(payload: unknown) {
    try {
      return JSON.stringify(payload);
    } catch (error) {
      return null;
    }
  }
}

export { FetchConfig };
