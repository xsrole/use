"use strict";
const vue = require("vue");
const axios = require("axios");
const _interopDefaultLegacy = (e) => e && typeof e === "object" && "default" in e ? e : { default: e };
const axios__default = /* @__PURE__ */ _interopDefaultLegacy(axios);
const _calcProgress = (progressEvent) => {
  const { loaded, total } = progressEvent;
  return Math.round(loaded / total * 100) / 100;
};
const _isFunction = (input) => {
  return "[object Function]" === Object.prototype.toString.call(input);
};
const _config = {
  baseURL: "",
  timeout: 1e3 * 30,
  headers: {
    "Content-Type": "application/json"
  }
};
const useAxios = (url, data, option) => {
  let controller = new AbortController();
  const loading = vue.ref(true);
  const error = vue.ref(false);
  const responseData = vue.ref();
  const progress = vue.ref(0);
  const uploadProgress = vue.ref(0);
  const downloadProgress = vue.ref(0);
  const resend = (url2, data2) => {
    controller = new AbortController();
    send(url2, data2);
  };
  const abort = () => {
    controller.abort();
  };
  const onUploadProgress = (progressEvent) => {
    uploadProgress.value = _calcProgress(progressEvent);
    progress.value = _calcProgress(progressEvent);
  };
  const onDownloadProgress = (progressEvent) => {
    downloadProgress.value = _calcProgress(progressEvent);
    progress.value = _calcProgress(progressEvent);
  };
  let _onSuccess = (response) => {
  };
  let _onError = (error2) => {
  };
  const _transform = (option == null ? void 0 : option.transform) && _isFunction(option == null ? void 0 : option.transform) ? option.transform : (res) => {
    return res.data;
  };
  Object.assign(_config, option == null ? void 0 : option.config);
  Object.assign(_config, {
    url,
    method: (option == null ? void 0 : option.method) ? option == null ? void 0 : option.method : "get",
    signal: controller.signal,
    data: (option == null ? void 0 : option.method) !== "GET" && (option == null ? void 0 : option.method) !== "get" ? data : void 0,
    params: (option == null ? void 0 : option.method) === "GET" || (option == null ? void 0 : option.method) === "get" ? data : void 0,
    onUploadProgress,
    onDownloadProgress
  });
  axios__default.default.interceptors.request.use(
    (config) => {
      loading.value = true;
      error.value = false;
      progress.value = 0;
      uploadProgress.value = 0;
      downloadProgress.value = 0;
      responseData.value = void 0;
      config = (option == null ? void 0 : option.before) ? option == null ? void 0 : option.before(config) : config;
      return config;
    },
    (error2) => {
      return Promise.reject(error2);
    }
  );
  axios__default.default.interceptors.response.use(
    (response) => {
      response = (option == null ? void 0 : option.after) ? option == null ? void 0 : option.after(response) : response;
      return response;
    },
    (error2) => {
      return Promise.reject(error2);
    }
  );
  const send = (url2, data2) => {
    _config.url = url2 || _config.url;
    _config.signal = controller.signal;
    _config.data = data2 ? _config.method !== "GET" && _config.method !== "get" ? data2 : void 0 : _config.data;
    _config.params = data2 ? _config.method === "GET" || _config.method === "get" ? data2 : void 0 : _config.data;
    axios__default.default(_config).then((res) => {
      responseData.value = _transform !== true ? _transform(res) : res;
      _onSuccess(res);
    }).catch((err) => {
      error.value = true;
      _onError(err);
    }).finally(() => {
      loading.value = false;
    });
  };
  send();
  return {
    loading,
    data: responseData,
    progress,
    uploadProgress,
    downloadProgress,
    error,
    abort,
    resend,
    onSuccess: (cb) => {
      _onSuccess = cb;
    },
    onError: (cb) => {
      _onError = cb;
    }
  };
};
module.exports = useAxios;
