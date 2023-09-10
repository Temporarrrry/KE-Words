import instance from "./Instance";

export default {
  getStudyItem: async (isWord: boolean = true, id: number) => {
    return await instance
      .get(`/${isWord ? "word" : "sentence"}/id`)
      .catch((e) => {
        console.log("getWord", e.response);
        return e.response;
      });
  },
  getStudyItemList: async (isWord: boolean = true, page: number) => {
    return await instance
      .get(`/${isWord ? "word" : "sentence"}?page=${page}&size=20`)
      .catch((e) => {
        console.log("getWords", e.response);
        return e.response;
      });
  },
  addBookmark: async (isWord: boolean = true, id: number) => {
    return await instance
      .post(
        `/bookmark/${isWord ? "word" : "sentence"}/save`,
        isWord ? { wordId: id } : { sentenceId: id }
      )
      .catch((e) => {
        console.log("addBookmark", e.response);
        return e.response;
      });
  },
  deleteBookmark: async (isWord: boolean = true, id: number) => {
    return await instance
      .post(
        `/bookmark/${isWord ? "word" : "sentence"}/delete`,
        isWord ? { wordId: id } : { sentenceId: id }
      )
      .catch((e) => {
        console.log("deleteBookmark", e.response);
        return e.response;
      });
  },
};
