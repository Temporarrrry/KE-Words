import instance from "./Instance";

const testTypes = [
  "word/meaning",
  "sentence/meaning",
  "sentence/filling",
  "sentence/ordering",
];

export default {
  getPractice: async (type: number) => {
    return await instance.get(`/${testTypes[type]}/practice`).catch((e) => {
      console.log(`practice ${testTypes[type]}`, e.response);
      return e.response;
    });
  },
  getTest: async (type: number) => {
    return await instance.post(`/${testTypes[type]}/test`).catch((e) => {
      console.log(`test ${testTypes[type]}`, e.response);
      return e.response;
    });
  },
  gradeTest: async (type: number, quizId: number, answers: any[]) => {
    return await instance
      .post(`/${testTypes[type]}/grade`, {
        quizId: quizId,
        userAnswers: answers,
      })
      .catch((e) => {
        console.log(`grade ${testTypes[type]}`, e.response);
        return e.response;
      });
  },
};
