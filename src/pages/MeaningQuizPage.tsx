import React from "react";
import MeaningPractice from "../components/organisms/practice/MeaningPractice";
import MeaningTest from "../components/organisms/test/MeaningTest";

type Props = {
  isPractice: boolean;
};

const MeaningQuizPage = ({ isPractice }: Props) => {
  return isPractice ? <MeaningPractice /> : <MeaningTest />;
};

export default MeaningQuizPage;
