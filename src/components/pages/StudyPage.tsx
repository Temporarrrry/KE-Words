import React from "react";
import Study from "../organisms/study/Study";

// import { useParams } from "react-router-dom";

type Props = {
  type: number;
};

function StudyPage({ type }: Props) {
  // let { lang } = useParams();
  return <Study type={type} />;
}

export default StudyPage;
