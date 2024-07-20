import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import ApiPort from "src/shared/api/ports/ApiPort";
import { HttpClientConfig, HttpClientResponse } from "src/shared/api/types";
import { HttpClient } from "src/shared/api/ports/types";

class MockHttpClient implements HttpClient {
  async get<T, D>(
    endpoint: string,
    config?: HttpClientConfig<D>
  ): Promise<HttpClientResponse<T>> {
    return { data: { id: 1, title: "GET" } as unknown as T };
  }

  async post<T, D>(
    endpoint: string,
    config?: HttpClientConfig<D>
  ): Promise<HttpClientResponse<T>> {
    return { data: { id: 2, title: "POST" } as unknown as T };
  }
}

interface Response {
  id: number;
  title: string;
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

const configs = {
  headers: {
    Authorization: "Bearer token",
  },
  payload: { id: 2, title: "Test Payload" },
};

describe("ApiPort", () => {
  it("should pass the correct configs to the adapter", async () => {
    const endpoint = "/path";

    const spy = vi.spyOn(mockHttpClient, "get");
    await apiPort.get(endpoint, configs);

    expect(spy).toHaveBeenCalledWith(endpoint, configs);
  });

  it("should delegate the GET request to the adapter and return the data", async () => {
    const endpoint = "/path";

    const spy = vi.spyOn(mockHttpClient, "get");
    const { data } = await apiPort.get<Response, {}>(endpoint);

    expect(data).toEqual({ id: 1, title: "GET" });
    expect(spy).toBeCalledTimes(1);
  });

  it("should delegate the POST request to the adapter and return the data", async () => {
    const endpoint = "/path";

    const spy = vi.spyOn(mockHttpClient, "post");
    const { data } = await apiPort.post<Response, {}>(endpoint);

    expect(data).toEqual({ id: 2, title: "POST" });
    expect(spy).toBeCalledTimes(1);
  });
});
