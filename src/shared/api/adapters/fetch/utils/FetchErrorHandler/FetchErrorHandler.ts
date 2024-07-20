import HttpError from "src/shared/api/utils/HttpError";

class FetchErrorHandler {
  static async ResponseError(response: Response) {
    if (response.ok === false) {
      const data = await response.json();
      throw new HttpError(response, data);
    }
  }
}

export { FetchErrorHandler };
