import React from "react";
import WordPractice from "../components/organisms/practice/WordPractice";
import WordTest from "../components/organisms/test/WordTest";

type Props = {
  isPractice: boolean;
};

const WordQuizPage = ({ isPractice }: Props) => {
  return isPractice ? <WordPractice /> : <WordTest />;
};

export default WordQuizPage;
