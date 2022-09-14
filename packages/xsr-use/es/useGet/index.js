import useAxios from "../useAxios";
const useGet = (url, data) => {
  return useAxios(url, data);
};
export {
  useGet as default
};
