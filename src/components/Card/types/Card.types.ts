import { MouseEventHandler } from "react";

export type Color = "brown" | "green" | "blue" | "red";

export interface Card<R = unknown, P = unknown, T = any> {
  title: string;
  response: R;
  payload?: P;
  onClick: MouseEventHandler<T>;
  color?: Color;
}
