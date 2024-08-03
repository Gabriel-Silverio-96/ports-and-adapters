import type { HttpErrorResponse } from "src/shared/api/utils/HttpError/types";

class HttpError implements HttpErrorResponse {
  status: number;
  message: string;
  data: unknown;

  constructor(response: { status: number }, data?: unknown) {
    this.status = response.status;
    this.message = `An error has occurred: ${response.status}`;
    this.data = data || null;
  }
}

export default HttpError;
