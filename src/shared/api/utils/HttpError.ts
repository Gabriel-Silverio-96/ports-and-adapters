import { HttpErrorResponse } from "src/shared/api/types";

class HttpError implements HttpErrorResponse {
  status: number;
  message: string;

  constructor(response: { status: number }) {
    this.status = response.status;
    this.message = `An error has occurred: ${response.status}`;
  }
}

export default HttpError;
