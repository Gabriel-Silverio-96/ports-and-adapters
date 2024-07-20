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

    mockedAxios.get.mockResolvedValue({ data: response });

    const { data } = await adapter.get(endpoint);

    expect(data).toEqual(response);
    expect(mockedAxios.get).toHaveBeenCalledWith(endpoint, {});
  });

  it("should make a POST request and return data", async () => {
    const endpoint = "/path";
    const response = [{ id: 1 }];

    mockedAxios.post.mockResolvedValue({ data: response });

    const payload = [{ id: 2 }];
    const { data } = await adapter.post(endpoint, {
      payload,
    });

    expect(data).toEqual(response);
    expect(mockedAxios.post).toHaveBeenCalledWith(endpoint, payload, {});
  });

  it("should make request with config", async () => {
    const endpoint = "/path";
    const config: HttpClientConfig = {
      headers: { Authorization: "Bearer token" },
      payload: [{ id: 2 }],
    };

    mockedAxios.get.mockResolvedValue({ data: {} });
    await adapter.get(endpoint, config);

    expect(mockedAxios.get).toHaveBeenCalledWith(endpoint, {
      headers: { Authorization: "Bearer token" },
      data: [{ id: 2 }],
    });
  });

  it("should handle errors", async () => {
    const endpoint = "/path";

    mockedAxios.get.mockRejectedValue({
      response: {
        request: { response: { message: "There's a problem" } },
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
