"use strict";
const useAxios = require("../useAxios");
const _interopDefaultLegacy = (e) => e && typeof e === "object" && "default" in e ? e : { default: e };
const useAxios__default = /* @__PURE__ */ _interopDefaultLegacy(useAxios);
const usePost = (url, data) => {
  return useAxios__default.default(url, data, {
    method: "post"
  });
};
module.exports = usePost;
