import { ProgressEvent } from "./index.d";
export const _calcProgress = (progressEvent: ProgressEvent) => {
  const { loaded, total } = progressEvent;
  return Math.round((loaded / total) * 100) / 100;
};
export const _isFunction = (input: unknown): boolean => {
  return "[object Function]" === Object.prototype.toString.call(input);
};
