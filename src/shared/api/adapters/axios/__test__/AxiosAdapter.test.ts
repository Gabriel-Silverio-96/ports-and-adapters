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
import AxiosAdapter from "src/shared/api/adapters/axios/AxiosAdapter";
import AxiosInstance from "src/shared/api/adapters/axios/config/AxiosInstance";

const mockedAxios = AxiosInstance as any;

vi.mock("src/shared/api/adapters/axios/config/AxiosInstance");
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

    const { data } = await adapter.get<typeof response, any>(endpoint);

    expect(data).toEqual(response);
    expect(mockedAxios.get).toHaveBeenCalledWith(endpoint, {});
  });

  it("should make request with config", async () => {
    const endpoint = "/path";
    const config: HttpClientConfig<{ Authorization: string }> = {
      headers: { Authorization: "Bearer token" },
    };

    mockedAxios.get.mockResolvedValue({ data: {} });
    await adapter.get(endpoint, config);

    expect(mockedAxios.get).toHaveBeenCalledWith(endpoint, { ...config });
  });

  it("should handle errors", async () => {
    const endpoint = "/path";
    const message = "Network Error";

    mockedAxios.get.mockRejectedValue(new Error(message));
    const response = async () => await adapter.get(endpoint);

    expect(response).rejects.toThrow(message);
  });
});
