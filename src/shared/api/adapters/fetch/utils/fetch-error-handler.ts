class FetchErrorHandler {
  static ResponseError(response: Response) {
    if (response.ok === false) {
      const message = `An error has occurred: ${response.status}`;
      throw new Error(message);
    }
  }
}

export default FetchErrorHandler;
