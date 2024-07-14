import FetchErrorHandler from "./FetchErrorHandler";
import { describe, expect, it } from "vitest";

describe("FetchErrorHandler", () => {
  it("should throw an error if response is not ok", () => {
    const response = { ok: false, status: 500 } as Response;

    const result = () => FetchErrorHandler.ResponseError(response);
    const expected = { status: 500, message: "An error has occurred: 500" };

    expect(result).toThrowError(expect.objectContaining(expected));
  });

  it("should not throw an error if response is ok", () => {
    const response = { ok: true, status: 200 } as Response;

    const result = () => FetchErrorHandler.ResponseError(response);

    expect(result).not.toThrow();
  });
});
