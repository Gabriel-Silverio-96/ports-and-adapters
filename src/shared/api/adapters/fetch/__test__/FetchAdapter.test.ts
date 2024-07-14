import { API } from "src/app.constants";
import { HttpClientConfig } from "src/shared/api/types";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import FetchAdapter from "../FetchAdapter";

const mockedFetch = vi.fn();

vi.stubGlobal("fetch", mockedFetch);
let adapter: FetchAdapter;

beforeEach(() => {
  adapter = new FetchAdapter();
});

afterEach(() => {
  vi.clearAllMocks();
});

describe("FetchAdapter", () => {
  it("should make a GET request and return data", async () => {
    const endpoint = "/path";
    const response = [{ id: 1 }];

    mockedFetch.mockResolvedValue({ ok: true, json: async () => response });

    const { data } = await adapter.get(endpoint);

    expect(data).toEqual(response);
    expect(mockedFetch).toHaveBeenCalledWith(`${API.BASE_URL}${endpoint}`, {
      method: "GET",
    });
  });

  it("should make request with config", async () => {
    const endpoint = "/path";
    const response = [{ id: 1 }];
    const config: HttpClientConfig<{ Authorization: string }> = {
      headers: { Authorization: "Bearer token" },
    };

    mockedFetch.mockResolvedValue({ ok: true, json: async () => response });
    await adapter.get<typeof response, any>(endpoint, config);

    expect(mockedFetch).toHaveBeenCalledWith(`${API.BASE_URL}${endpoint}`, {
      method: "GET",
      ...config,
    });
  });

  it("should handle errors", async () => {
    const endpoint = "/path";
    const message = "Network Error";

    mockedFetch.mockResolvedValue({
      ok: false,
      status: 500,
      statusText: message,
    });
    const response = async () => await adapter.get(endpoint);

    expect(response).rejects.toThrow("An error has occurred: 500");
  });
});
