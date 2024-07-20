import HttpError from "src/shared/api/utils/HttpError";

class FetchErrorHandler {
  static ResponseError(response: Response) {
    if (response.ok === false) {
      throw new HttpError(response);
    }
  }
}

export { FetchErrorHandler };
