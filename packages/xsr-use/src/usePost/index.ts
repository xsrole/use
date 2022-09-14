import useAxios from "../useAxios";
import { UseAxiosReturns } from "../useAxios";

export type UsePost<REQ = any, RES = any> = (
    url: string,
    data?: REQ
  ) => UseAxiosReturns<REQ, RES>;
  
const usePost: UsePost = (url, data) => {
    return useAxios(url, data, {
      method: "post",
    });
  };
export default usePost