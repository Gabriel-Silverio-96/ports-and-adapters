import { describe, it, expect } from "vitest";
import { HttpClientConfig } from "src/shared/api/types";
import { FetchConfig } from "src/shared/api/adapters/fetch/utils/FetchConfig/FetchConfig";

describe("FetchConfig", () => {
  it("should format HttpClientConfig correctly", () => {
    const config: HttpClientConfig = {
      headers: { "Content-Type": "application/json" },
      payload: { key: "value" },
    };

    const formattedConfig = FetchConfig.format(config);

    const expected = {
      headers: { "Content-Type": "application/json" },
      body: '{"key":"value"}',
    };
    expect(formattedConfig).toEqual(expected);
  });

  it("should return null body when payload cannot be stringified", () => {
    const payloadSimulatesFailureInJsonStringify = {
      toJSON() {
        throw new Error("Error");
      },
    };

    const config: HttpClientConfig = {
      headers: { "Content-Type": "application/json" },
      payload: payloadSimulatesFailureInJsonStringify,
    };

    const formattedConfig = FetchConfig.format(config);

    const expected = {
      headers: { "Content-Type": "application/json" },
      body: null,
    };
    expect(formattedConfig).toStrictEqual(expected);
  });

  it("should handle empty headers and payload", () => {
    const formattedConfig = FetchConfig.format({});

    const expected = { headers: undefined, body: undefined };
    expect(formattedConfig).toStrictEqual(expected);
  });
});
