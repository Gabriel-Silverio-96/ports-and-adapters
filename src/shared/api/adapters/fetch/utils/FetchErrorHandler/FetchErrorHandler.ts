import { HttpError } from "src/shared/api/utils/HttpError";

class FetchErrorHandler {
  public static async responseError(response: Response) {
    if (response.ok === false) {
      const data = await this.safeParse(response);
      throw new HttpError(response, data);
    }
  }

  private static async safeParse(response: Response) {
    try {
      return await response.json();
    } catch (error) {
      console.error("FetchErrorHandler: JSON parsing failed");
      return null;
    }
  }
}

export { FetchErrorHandler };
