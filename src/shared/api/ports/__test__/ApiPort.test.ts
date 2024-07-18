import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import ApiPort from "src/shared/api/ports/ApiPort";
import { HttpClientConfig, HttpClientResponse } from "src/shared/api/types";
import { HttpClient } from "src/shared/api/ports/types";

class MockHttpClient implements HttpClient {
  async get<T, D>(
    endpoint: string,
    config?: HttpClientConfig<D>
  ): Promise<HttpClientResponse<T>> {
    return { data: { id: 1, title: "Test Data" } as unknown as T };
  }
}

let apiPort: ApiPort;
let mockHttpClient: MockHttpClient;

beforeEach(() => {
  mockHttpClient = new MockHttpClient();
  apiPort = new ApiPort(mockHttpClient);
});

afterEach(() => {
  vi.clearAllMocks();
});

describe("ApiPort", () => {
  it("should delegate the GET request to the adapter and return the data", async () => {
    const endpoint = "/path";
    const config = { headers: { Authorization: "Bearer token" } };

    const { data } = await apiPort.get<{ id: number; title: string }, {}>(
      endpoint,
      config
    );

    expect(data).toEqual({ id: 1, title: "Test Data" });
  });

  it("should pass the correct endpoint and config to the adapter", async () => {
    const endpoint = "/path";
    const config = { headers: { Authorization: "Bearer token" } };

    const spy = vi.spyOn(mockHttpClient, "get");
    await apiPort.get(endpoint, config);

    expect(spy).toHaveBeenCalledWith(endpoint, config);
  });
});
