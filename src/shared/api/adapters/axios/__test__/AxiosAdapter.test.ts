import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  vi,
  vitest,
} from "vitest";
import { HttpClientConfig } from "src/shared/api/types";
import { AxiosAdapter } from "src/shared/api/adapters/axios/AxiosAdapter";
import { AxiosInstance } from "src/shared/api/adapters/axios/AxiosInstance";

const mockedAxios = AxiosInstance as any;

vi.mock("src/shared/api/adapters/axios/AxiosInstance");
let adapter: AxiosAdapter;

beforeEach(() => {
  adapter = new AxiosAdapter();
});

afterEach(() => {
  vitest.clearAllMocks();
});

describe("AxiosAdapter", () => {
  it("should make a GET request and return data", async () => {
    const endpoint = "/path";
    const response = [{ id: 1 }];

    mockedAxios.mockResolvedValue({ data: response });

    const { data } = await adapter.get(endpoint);

    const expected = {
      method: "GET",
      url: endpoint,
      data: undefined,
      headers: undefined,
    };

    expect(data).toEqual(response);
    expect(mockedAxios).toHaveBeenCalledWith(expected);
  });

  it("should make a POST request and return data", async () => {
    const endpoint = "/path";
    const response = [{ id: 1 }];

    mockedAxios.mockResolvedValue({ data: response });

    const payload = [{ id: 2 }];
    const { data } = await adapter.post(endpoint, {
      payload,
    });

    const expected = {
      method: "POST",
      url: endpoint,
      data: payload,
      headers: undefined,
    };

    expect(data).toEqual(response);
    expect(mockedAxios).toHaveBeenCalledWith(expected);
  });

  it("should make a PUT request and return data", async () => {
    const endpoint = "/path";
    const response = [{ id: 1 }];

    mockedAxios.mockResolvedValue({ data: response });

    const payload = [{ id: 3 }];
    const { data } = await adapter.put(endpoint, {
      payload,
    });

    const expected = {
      method: "PUT",
      url: endpoint,
      data: payload,
      headers: undefined,
    };

    expect(data).toEqual(response);
    expect(mockedAxios).toHaveBeenCalledWith(expected);
  });

  it("should make a PATCH request and return data", async () => {
    const endpoint = "/path";
    const response = [{ id: 1 }];

    mockedAxios.mockResolvedValue({ data: response });

    const payload = [{ id: 4 }];
    const { data } = await adapter.patch(endpoint, {
      payload,
    });

    const expected = {
      method: "PATCH",
      url: endpoint,
      data: payload,
      headers: undefined,
    };

    expect(data).toEqual(response);
    expect(mockedAxios).toHaveBeenCalledWith(expected);
  });

  it("should make a DELETE request and return data", async () => {
    const endpoint = "/path";
    const response = [{ id: 1 }];

    mockedAxios.mockResolvedValue({ data: response });

    const payload = [{ id: 5 }];
    const { data } = await adapter.delete(endpoint, {
      payload,
    });

    const expected = {
      method: "DELETE",
      url: endpoint,
      data: payload,
      headers: undefined,
    };

    expect(data).toEqual(response);
    expect(mockedAxios).toHaveBeenCalledWith(expected);
  });

  it("should make request with config", async () => {
    const endpoint = "/path";
    const config: HttpClientConfig = {
      headers: { Authorization: "Bearer token" },
      payload: [{ id: 2 }],
    };

    mockedAxios.mockResolvedValue({ data: {} });
    await adapter.get(endpoint, config);

    const expected = {
      method: "GET",
      url: endpoint,
      headers: { Authorization: "Bearer token" },
      data: [{ id: 2 }],
    };

    expect(mockedAxios).toHaveBeenCalledWith(expected);
  });

  it("should handle errors", async () => {
    const endpoint = "/path";

    mockedAxios.mockRejectedValue({
      response: {
        data: { message: "There's a problem" },
        status: 500,
      },
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
