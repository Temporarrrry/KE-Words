import React from "react";
import WordPractice from "../organisms/practice/WordPractice";
import WordTest from "../organisms/test/WordTest";

type Props = {
  isPractice: boolean;
};

const WordQuizPage = ({ isPractice }: Props) => {
  return isPractice ? <WordPractice /> : <WordTest />;
};

export default WordQuizPage;
