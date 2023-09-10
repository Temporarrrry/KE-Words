import instance from "./Instance";

export default {
  parseJwt: (token: string) => {
    let base64Url = token.split(".")[1];
    let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    let jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  },

  login: async (email: string, pw: string) => {
    return await instance
      .post("/member/login", {
        userEmail: email,
        password: pw,
      })
      .catch((e) => {
        console.log("login error", e.response);
        return e.response;
      });
  },
  refresh: async (token: string) => {
    const response = await instance
      .post("/token/reIssue", { refreshToken: token })
      .then((res) => {
        if (res.status === 200) {
          instance.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${res.data["accessToken"]}`;
          localStorage.setItem("refreshToken", res.data["refreshToken"]);
          localStorage.setItem("accessToken", res.data["accessToken"]);
        }
        return res;
      })
      .catch((e) => {
        console.log("refresh", e);
        return e.response;
      });
    return response;
  },
  register: async (email: string, pw: string) => {
    return await instance
      .post("/member/register", {
        userEmail: email,
        password: pw,
      })
      .catch((e) => {
        console.log("register error", e.response);
        return e.response;
      });
  },
  resign: async (pw: string) => {
    return await instance
      .delete("/member/resign", {
        data: { password: pw },
      })
      .catch((e) => {
        console.log("resign error", e.response);
        return e.response;
      });
  },
  chkEmailDuplicate: async (email: string) => {
    return await instance
      .get("/member/userEmailDuplicateCheck", {
        data: { userEmail: email },
      })
      .catch((e) => {
        console.log("email duplicate error", e.response);
        return e.response;
      });
  },
  changePw: async (pw: string, npw: string) => {
    return await instance
      .patch(`/member/password`, { password: pw, newPassword: npw })
      .catch((e) => {
        console.log("changePw", e.response);
        return e.response;
      });
  },
  getMyInfo: async (email: string) => {
    return await instance.get(`/member/info?email=${email}`).catch((e) => {
      console.log("getInfo", e.response);
      return e.response;
    });
  },
  getLastId: async (isWord: boolean = true) => {
    return await instance
      .get(`last/${isWord ? "word" : "sentence"}`)
      .catch((e) => {
        console.log("getLast", isWord ? "word" : "sentence");
        return e.response;
      });
  },
};
