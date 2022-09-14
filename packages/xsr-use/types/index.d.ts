import { AxiosError } from 'axios';
import { AxiosRequestConfig } from 'axios';
import { AxiosResponse } from 'axios';
import { Method } from 'axios';
import { Ref } from 'vue';

declare type Transform<T = any> = (res: AxiosResponse) => T;

declare type UseAxios<REQ = any, RES = any> = (url: string, data?: REQ, option?: UseAxiosoOption<RES>) => UseAxiosReturns<REQ, RES>;

export declare const useAxios: UseAxios;

declare type UseAxiosoOption<REQ = any, RES = any> = {
    method?: Method;
    config?: AxiosRequestConfig<REQ>;
    before?: (config: AxiosRequestConfig<REQ>) => AxiosRequestConfig<REQ>;
    after?: (response: AxiosResponse<REQ, RES>) => AxiosResponse<REQ, RES>;
    transform?: boolean | Transform<RES>;
};

declare type UseAxiosReturns<REQ = any, RES = any> = {
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

declare type UseGet<REQ = any, RES = any> = (url: string, data?: REQ) => UseAxiosReturns<REQ, RES>;

export declare const useGet: UseGet;

declare type UsePost<REQ = any, RES = any> = (url: string, data?: REQ) => UseAxiosReturns<REQ, RES>;

export declare const usePost: UsePost;

export { }
