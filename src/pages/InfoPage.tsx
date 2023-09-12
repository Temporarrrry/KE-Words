import React from "react";
import ChangePW from "../components/organisms/info/ChangePW";
import Article from "../components/atoms/layouts/Article";
import QuizList from "../components/organisms/info/QuizList";

const InfoPage = () => {
  return (
    <Article marginTop="10dvh">
      <ChangePW />
      <QuizList />
    </Article>
  );
};

export default InfoPage;
