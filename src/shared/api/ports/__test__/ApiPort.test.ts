import { ApiPort } from "src/shared/api/ports/ApiPort";
import { HttpClient, HttpClientResponse } from "src/shared/api/types";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { HttpError } from "src/shared/api/utils/HttpError";

class MockHttpClient implements HttpClient {
  async get<T>(): Promise<HttpClientResponse<T> | HttpError> {
    return { data: { id: 1, title: "GET" } as unknown as T };
  }

  async post<T>(): Promise<HttpClientResponse<T> | HttpError> {
    return { data: { id: 2, title: "POST" } as unknown as T };
  }

  async put<T>(): Promise<HttpClientResponse<T> | HttpError> {
    return { data: { id: 3, title: "PUT" } as unknown as T };
  }

  async patch<T>(): Promise<HttpClientResponse<T> | HttpError> {
    return { data: { id: 4, title: "PATCH" } as unknown as T };
  }

  async delete<T>(): Promise<HttpClientResponse<T> | HttpError> {
    return { data: { id: 5, title: "DELETE" } as unknown as T };
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
    const { data } = await apiPort.get(endpoint);

    expect(data).toEqual({ id: 1, title: "GET" });
    expect(spy).toBeCalledTimes(1);
  });

  it("should delegate the POST request to the adapter and return the data", async () => {
    const endpoint = "/path";

    const spy = vi.spyOn(mockHttpClient, "post");
    const { data } = await apiPort.post(endpoint);

    expect(data).toEqual({ id: 2, title: "POST" });
    expect(spy).toBeCalledTimes(1);
  });

  it("should delegate the PUT request to the adapter and return the data", async () => {
    const endpoint = "/path";

    const spy = vi.spyOn(mockHttpClient, "put");
    const { data } = await apiPort.put(endpoint);

    expect(data).toEqual({ id: 3, title: "PUT" });
    expect(spy).toBeCalledTimes(1);
  });

  it("should delegate the PATCH request to the adapter and return the data", async () => {
    const endpoint = "/path";

    const spy = vi.spyOn(mockHttpClient, "patch");
    const { data } = await apiPort.patch(endpoint);

    expect(data).toEqual({ id: 4, title: "PATCH" });
    expect(spy).toBeCalledTimes(1);
  });

  it("should delegate the DELETE request to the adapter and return the data", async () => {
    const endpoint = "/path";

    const spy = vi.spyOn(mockHttpClient, "delete");
    const { data } = await apiPort.delete(endpoint);

    expect(data).toEqual({ id: 5, title: "DELETE" });
    expect(spy).toBeCalledTimes(1);
  });
});
