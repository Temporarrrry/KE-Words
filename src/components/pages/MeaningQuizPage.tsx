import React from "react";
import MeaningPractice from "../organisms/practice/MeaningPractice";
import MeaningTest from "../organisms/test/MeaningTest";

type Props = {
  isPractice: boolean;
};

const MeaningQuizPage = ({ isPractice }: Props) => {
  return isPractice ? <MeaningPractice /> : <MeaningTest />;
};

export default MeaningQuizPage;
