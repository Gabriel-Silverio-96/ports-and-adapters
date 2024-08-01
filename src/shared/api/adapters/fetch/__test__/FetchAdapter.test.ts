import { API } from "src/app.constants";
import { FetchAdapter } from "src/shared/api/adapters/fetch/FetchAdapter";
import { HttpClientConfig } from "src/shared/api/types";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { DEFAULT_FETCH_CONFIG } from "src/shared/api/adapters/fetch/FetchAdapter.constants";

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

    const expected = {
      method: "GET",
      headers: { ...DEFAULT_FETCH_CONFIG.HEADERS },
      body: undefined,
    };

    expect(data).toEqual(response);
    expect(mockedFetch).toHaveBeenCalledWith(
      `${API.BASE_URL}${endpoint}`,
      expected
    );
  });

  it("should make a POST request and return data", async () => {
    const endpoint = "/path";
    const response = [{ id: 2 }];

    mockedFetch.mockResolvedValue({ ok: true, json: async () => response });
    const payload = [{ id: 3 }];
    const { data } = await adapter.post(endpoint, { payload });

    const expected = {
      method: "POST",
      headers: { ...DEFAULT_FETCH_CONFIG.HEADERS },
      body: JSON.stringify(payload),
    };

    expect(data).toEqual(response);
    expect(mockedFetch).toHaveBeenCalledWith(
      `${API.BASE_URL}${endpoint}`,
      expected
    );
  });

  it("should make a PUT request and return data", async () => {
    const endpoint = "/path";
    const response = [{ id: 2 }];

    mockedFetch.mockResolvedValue({ ok: true, json: async () => response });
    const payload = [{ id: 4 }];
    const { data } = await adapter.put(endpoint, { payload });

    const expected = {
      method: "PUT",
      headers: { ...DEFAULT_FETCH_CONFIG.HEADERS },
      body: JSON.stringify(payload),
    };

    expect(data).toEqual(response);
    expect(mockedFetch).toHaveBeenCalledWith(
      `${API.BASE_URL}${endpoint}`,
      expected
    );
  });

  it("should make a PATCH request and return data", async () => {
    const endpoint = "/path";
    const response = [{ id: 2 }];

    mockedFetch.mockResolvedValue({ ok: true, json: async () => response });
    const payload = [{ id: 5 }];
    const { data } = await adapter.patch(endpoint, { payload });

    const expected = {
      method: "PATCH",
      headers: { ...DEFAULT_FETCH_CONFIG.HEADERS },
      body: JSON.stringify(payload),
    };

    expect(data).toEqual(response);
    expect(mockedFetch).toHaveBeenCalledWith(
      `${API.BASE_URL}${endpoint}`,
      expected
    );
  });

  it("should make a DELETE request and return data", async () => {
    const endpoint = "/path";
    const response = [{ id: 2 }];

    mockedFetch.mockResolvedValue({ ok: true, json: async () => response });
    const payload = [{ id: 6 }];
    const { data } = await adapter.delete(endpoint, { payload });

    const expected = {
      method: "DELETE",
      headers: { ...DEFAULT_FETCH_CONFIG.HEADERS },
      body: JSON.stringify(payload),
    };

    expect(data).toEqual(response);
    expect(mockedFetch).toHaveBeenCalledWith(
      `${API.BASE_URL}${endpoint}`,
      expected
    );
  });

  it("should make request with config", async () => {
    const endpoint = "/path";
    const response = [{ id: 1 }];
    const config: HttpClientConfig = {
      headers: {
        ...DEFAULT_FETCH_CONFIG.HEADERS,
        Authorization: "Bearer token",
      },
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
      json: vi.fn().mockResolvedValue({ message: "There's a problem" }),
    });
    const response = async () => await adapter.get(endpoint);

    const expected = {
      status: 500,
      message: "An error has occurred: 500",
      data: { message: "There's a problem" },
    };

    expect(response).rejects.toThrowError(expect.objectContaining(expected));
  });
});
