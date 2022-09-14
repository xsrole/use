import { UseAxiosReturns } from "../useAxios";
export declare type UseGet<REQ = any, RES = any> = (url: string, data?: REQ) => UseAxiosReturns<REQ, RES>;
declare const useGet: UseGet;
export default useGet;
