import { Ref } from "vue";
import { AxiosRequestConfig, AxiosResponse, AxiosError, Method } from "axios";
export type ProgressEvent = {
  loaded: number;
  total: number;
};
type Transform<T = any> = (res: AxiosResponse) => T;
type UseAxiosoOption<REQ = any, RES = any> = {
  method?: Method;
  config?: AxiosRequestConfig<REQ>;
  before?: (config: AxiosRequestConfig<REQ>) => AxiosRequestConfig<REQ>;
  after?: (response: AxiosResponse<REQ, RES>) => AxiosResponse<REQ, RES>;
  transform?: boolean | Transform<RES>;
};
export type UseAxiosReturns<REQ = any, RES = any> = {
  loading: Ref<boolean>;
  error: Ref<boolean>;
  data: Ref<RES>;
  uploadProgress: Ref<number>;
  downloadProgress: Ref<number>;
  resend: (url?: string, data?: REQ) => void;
  abort: () => void;
  onSuccess: (cb: (response: AxiosResponse) => void) => void;
  onError: (cb: (error: AxiosError) => void) => void;
};
export type UseAxios<REQ = any, RES = any> = (
  url: string,
  data?: REQ,
  option?: UseAxiosoOption<RES>
) => UseAxiosReturns<REQ, RES>;
export type UseGet<REQ = any, RES = any> = (
  url: string,
  data?: REQ
) => UseAxiosReturns<REQ, RES>;
export type UsePost<REQ = any, RES = any> = (
  url: string,
  data?: REQ
) => UseAxiosReturns<REQ, RES>;
