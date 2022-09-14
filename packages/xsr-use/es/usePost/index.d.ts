import { UseAxiosReturns } from "../useAxios";
export declare type UsePost<REQ = any, RES = any> = (url: string, data?: REQ) => UseAxiosReturns<REQ, RES>;
declare const usePost: UsePost;
export default usePost;
