import React, { useEffect, useState } from "react";
import QuizApi from "../../../lib/api/QuizApi";

type Props = {
  isPractice?: boolean;
};

const MeaningTest = ({ isPractice = false }: Props) => {
  const [test, setTest] = useState([]);
  const [quizId, setQuizId] = useState(-1);

  useEffect(() => {
    if (isPractice) {
      QuizApi.getSentencePractice(0).then((res) => {
        console.log(res);
        if (res.status === 200) {
          setTest(res.data);
        }
      });
    } else {
      QuizApi.getSentenceTest(0).then((res) => {
        console.log(res);
        if (res.status === 200) {
          setTest(res.data);
        }
      });
    }
  }, []);

  return <div>MeaningTest</div>;
};

export default MeaningTest;
