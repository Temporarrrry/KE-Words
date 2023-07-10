import React, { useEffect, useState } from "react";
import Hooks from "../../../lib/Hooks";

type Props = {};

function StudyKr({}: Props) {
  useEffect(() => {
    Hooks.generateQuiz(1).then((res) => {
      console.log(res.data);
    });
  }, []);

  const [word, setWord] = useState("");

  return <div>StudyKr</div>;
}

export default StudyKr;
