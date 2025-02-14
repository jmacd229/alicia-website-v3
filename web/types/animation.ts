import { RefObject } from "react";

export type AnimationConfig = {
  name: string;
  container: RefObject<HTMLDivElement>;
  data: any;
};
