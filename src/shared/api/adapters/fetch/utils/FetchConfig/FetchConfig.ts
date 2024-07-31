import { HttpClientConfig } from "src/shared/api/types";

class FetchConfig {
  public static format(config: HttpClientConfig) {
    const { headers, payload } = config;
    const body = this.safeStringify(payload);

    return {
      headers,
      body,
    };
  }

  private static safeStringify(payload: unknown) {
    try {
      return JSON.stringify(payload);
    } catch (error) {
      console.error(
        "FetchConfig: Value is not accepted for stringified",
        payload
      );
      return null;
    }
  }
}

export { FetchConfig };
