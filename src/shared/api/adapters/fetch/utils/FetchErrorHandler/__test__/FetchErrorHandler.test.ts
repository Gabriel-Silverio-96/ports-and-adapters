import { FetchErrorHandler } from "src/shared/api/adapters/fetch/utils/FetchErrorHandler";
import { describe, expect, it, vi } from "vitest";

describe("FetchErrorHandler", () => {
  it("should throw an error if response is not ok", () => {
    const response = {
      ok: false,
      status: 500,
      json: vi.fn().mockResolvedValue({ message: "There's a problem" }),
    } as any;

    const result = () => FetchErrorHandler.responseError(response);
    const expected = {
      status: 500,
      message: "An error has occurred: 500",
      data: { message: "There's a problem" },
    };

    expect(result).rejects.toThrow(expect.objectContaining(expected));
  });

  it("should return null data when the response value is not valid", () => {
    const response = {
      ok: false,
      status: 500,
      json: () => {
        throw new Error("Failed to parse JSON");
      },
    } as any;

    const result = () => FetchErrorHandler.responseError(response);
    const expected = {
      status: 500,
      message: "An error has occurred: 500",
      data: null,
    };

    expect(result).rejects.toThrow(expect.objectContaining(expected));
  });

  it("should not throw an error if response is ok", () => {
    const response = { ok: true, status: 200, json: vi.fn() } as any;

    const result = () => FetchErrorHandler.responseError(response);

    expect(result).not.toThrow();
    expect(result).not.toThrowError();
  });
});
