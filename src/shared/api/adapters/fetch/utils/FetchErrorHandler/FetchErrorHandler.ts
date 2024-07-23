import HttpError from "src/shared/api/utils/HttpError";

class FetchErrorHandler {
  static async ResponseError(response: Response) {
    if (response.ok === false) {
      const data = await this.safeParse(response);
      throw new HttpError(response, data);
    }
  }

  private static async safeParse(response: Response) {
    try {
      return await response.json();
    } catch (error) {
      return null;
    }
  }
}

export { FetchErrorHandler };
