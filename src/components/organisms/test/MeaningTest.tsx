import React, { useState } from "react";

type Props = {
  type: number; //0: Word, 1: Sentence
  isPractice?: boolean;
};

const MeaningTest = (props: Props) => {
  const [tests, setTests] = useState([]);
  const [answers, setAnswers] = useState([]);

  return <div>MeaningTest</div>;
};

export default MeaningTest;
