import axios from "axios";

const instance = axios.create({
  baseURL: "http://43.201.192.197:8080/api",
  timeout: 3000,
});

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
      .post("/member/resign", {
        password: pw,
      })
      .catch((e) => {
        console.log("resign error", e.response);
        return e.response;
      });
  },
  chkEmailDuplicate: async (email: string) => {
    return await instance
      .post("/member/userEmailDuplicateCheck", {
        email: email,
      })
      .catch((e) => {
        console.log("email duplicate error", e.response);
        return e.response;
      });
  },
  changePw: async (pw: string) => {
    return await instance
      .post(`/member/changePassword`, { newPassword: pw })
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

  addBookmark: async (wordId: number) => {
    return await instance
      .get(`/bookmarkWord/save?wordId=${wordId}`)
      .catch((e) => {
        console.log("addBookmark", e.response);
        return e.response;
      });
  },
  deleteBookmark: async (wordId: number) => {
    return await instance
      .delete(`/bookmarkWord/delete?wordId=${wordId}`)
      .catch((e) => {
        console.log("deleteBookmark", e.response);
        return e.response;
      });
  },

  getWords: async (cnt: number) => {
    return await instance.get(`/word/getWords?count=${cnt}`).catch((e) => {
      console.log("getWord", e.response);
      return e.response;
    });
  },
  getWordByEng: async (word: string) => {
    return await instance
      .post(`/word/findByEnglish`, { english: word })
      .catch((e) => {
        console.log("getWord", e.response);
        return e.response;
      });
  },

  generateQuiz: async (cnt: number) => {
    return await instance
      .get(`/quiz/generateEnglishQuiz?count=${cnt}`)
      .catch((e) => {
        console.log("generateQuiz", e.response);
        return e.response;
      });
  },
  submitQuiz: async (obj: object) => {
    return await instance.post("quiz/saveQuiz", obj).catch((e) => {
      console.log("generateQuiz", e.response);
      return e.response;
    });
  },

  getQuizzes: async () => {
    return await instance.get(`/quiz/findAllByUserId`).catch((e) => {
      console.log("getQuizzes", e.response);
      return e.response;
    });
  },
  getQuiz: async (id: number) => {
    return await instance.get(`/quiz/findById?id=${id}`).catch((e) => {
      console.log("getQuiz", e.response);
      return e.response;
    });
  },
};
