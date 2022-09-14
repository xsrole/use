"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const useAxios = require("./useAxios");
const useGet = require("./useGet");
const usePost = require("./usePost");
const _interopDefaultLegacy = (e) => e && typeof e === "object" && "default" in e ? e : { default: e };
const useAxios__default = /* @__PURE__ */ _interopDefaultLegacy(useAxios);
const useGet__default = /* @__PURE__ */ _interopDefaultLegacy(useGet);
const usePost__default = /* @__PURE__ */ _interopDefaultLegacy(usePost);
Object.defineProperty(exports, "useAxios", {
  enumerable: true,
  get: () => useAxios__default.default
});
Object.defineProperty(exports, "useGet", {
  enumerable: true,
  get: () => useGet__default.default
});
Object.defineProperty(exports, "usePost", {
  enumerable: true,
  get: () => usePost__default.default
});
