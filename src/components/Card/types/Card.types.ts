import { MouseEventHandler } from "react";

export interface Card<R = unknown, P = unknown, T = any> {
  response: R;
  payload?: P;
  onClick: MouseEventHandler<T>;
}
