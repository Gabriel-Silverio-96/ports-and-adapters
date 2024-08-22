export interface HttpErrorResponse<D = unknown> {
  status: number;
  message: string;
  data: D;
}
