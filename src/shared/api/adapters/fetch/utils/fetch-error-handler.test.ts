import FetchErrorHandler from "./fetch-error-handler";
import { describe, expect, test } from "vitest";

describe("Class FetchErrorHandler", () => {
  test("should throw an error if response is not ok", () => {
    const response = {
      ok: false,
      status: 500,
    } as Response;

    const result = () => FetchErrorHandler.ResponseError(response);
    expect(result).toThrow("An error has occurred: 500");
  });

  test("should not throw an error if response is ok", () => {
    const response = {
      ok: true,
      status: 200,
    } as Response;

    const result = () => FetchErrorHandler.ResponseError(response);
    expect(result).not.toThrow();
  });
});
