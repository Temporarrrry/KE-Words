import axios from "axios";

const instance = axios.create({
  baseURL: "http://43.201.192.197:8080/api",
  timeout: 3000,
});

let refreshed = false;
const REFRESH_URL = "http://43.201.192.197:8080/api/token/relssue";
instance.interceptors.request.use(
  function (config) {
    if (instance.defaults.headers.common["Authorization"] === undefined) {
      instance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("accessToken")}`;
    }
    // console.log("aToken", instance.defaults.headers.common["Authorization"]);
    console.log(config.url);
    return config;
  },
  async function (error) {
    return error;
  }
);

instance.interceptors.response.use(
  function (config) {
    return config;
  },
  async function (error) {
    const { response: errorResponse } = error;
    const conf = error.config;
    console.log(errorResponse.status);

    if (conf.url !== REFRESH_URL && errorResponse.status === 403) {
      let rToken = localStorage.getItem("refreshToken");
      console.log(rToken);
      if (rToken) {
        await instance
          .post("/refresh", { refreshToken: rToken })
          .then((res) => {
            console.log(res);
            refreshed = true;
            localStorage.setItem("refreshToken", res.data["refreshToken"]);
            localStorage.setItem("accessToken", res.data["accessToken"]);
            instance.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${res.data.accessToken}`;
            axios(conf);
          })
          .catch((err) => {
            console.log(err);
            console.log(rToken);
          });
      }
    }

    return Promise.reject(error);
  }
);

export default instance;
