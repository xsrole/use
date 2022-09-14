import useAxios from "../useAxios";
const usePost = (url, data) => {
  return useAxios(url, data, {
    method: "post"
  });
};
export {
  usePost as default
};
