import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = process.env.VUE_APP_BASE_API;

// 请求超时时间
instance.defaults.timeout = 20000;
// post请求头
instance.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";
instance.defaults.withCredentials = true;

// 请求拦截
instance.interceptors.request.use(
  config => {
    // 请求体携带token
    config.headers["token"] = localStorage.getItem("token");
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截
instance.interceptors.response.use(
  response => {
    if (response.status == 200) {
      return response.data;
    }
  },
  error => {
    if (!error.response) {
      return Promise.reject(error);
    }
    if (error.response.status == 401) {
      // token 失效
      localStorage.removeItem("token");
      location.reload();
    }
    return Promise.reject(error.response);
  }
);

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    instance
      .get(url, {
        params: params
      })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} data  [请求时携带的参数]
 */

export function post(url, data) {
  return new Promise((resolve, reject) => {
    instance
      .post(url, data)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}

export function deleteDate(url, data) {
  return new Promise((resolve, reject) => {
    instance
      .delete(url, { data })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}
export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    instance
      .put(url, data)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}
