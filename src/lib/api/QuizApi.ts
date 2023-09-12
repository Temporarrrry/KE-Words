import instance from "./Instance";

const testTypes = ["meaning", "filling", "ordering"];

export default {
  getWordPractice: async () => {
    return await instance.get(`/quiz/word/meaning/practice`).catch((e) => {
      console.log(`practice word`, e.response);
      return e.response;
    });
  },
  getWordTest: async () => {
    return await instance.post(`/quiz/word/meaning/test`).catch((e) => {
      console.log(`test word`, e.response);
      return e.response;
    });
  },
  getSentencePractice: async (type: number) => {
    return await instance
      .get(`/quiz/sentence/${testTypes[type]}/practice`)
      .catch((e) => {
        console.log(`practice ${testTypes[type]}`, e.response);
        return e.response;
      });
  },
  getSentenceTest: async (type: number) => {
    return await instance
      .post(`/quiz/sentence/${testTypes[type]}/test`)
      .catch((e) => {
        console.log(`test ${testTypes[type]}`, e.response);
        return e.response;
      });
  },
  gradeTest: async (isWord: boolean, quizId: number, answers: any[]) => {
    return await instance
      .post(`/quiz/${isWord ? "word" : "sentence"}/grade/${quizId}`, {
        userAnswers: answers,
      })
      .catch((e) => {
        console.log(`grade ${isWord ? "word" : "sentence"}`, e.response);
        return e.response;
      });
  },

  getQuizList: async (isWord: boolean, page: number) => {
    return await instance
      .get(`/quiz/${isWord ? "word" : "sentence"}?page=${page}&size=10`)
      .catch((e) => {
        console.log("getQuizList", e.response);
        return e.response;
      });
  },
  getQuizDetail: async (isWord: boolean, id: string) => {
    return await instance
      .get(`/quiz/${isWord ? "word" : "sentence"}/${id}`)
      .catch((e) => {
        console.log("getQuizDetail", e.response);
        return e.response;
      });
  },
};
