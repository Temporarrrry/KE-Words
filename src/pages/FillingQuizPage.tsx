import React from "react";
import FillingPractice from "../components/organisms/practice/FillingPractice";
import FillingTest from "../components/organisms/test/FillingTest";

type Props = {
  isPractice: boolean;
};

const FillingQuizPage = ({ isPractice }: Props) => {
  return isPractice ? <FillingPractice /> : <FillingTest />;
};

export default FillingQuizPage;
