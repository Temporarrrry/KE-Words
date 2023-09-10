import React from "react";
import MeaningTest from "../organisms/test/MeaningTest";
import OrderingTest from "../organisms/test/OrderingTest";
import FillingBlankTest from "../organisms/test/FillingBlankTest";

type Props = {
  type: number;
};

const PracticePage = (props: Props) => {
  const targets = [
    <MeaningTest isPractice={true} />,
    <OrderingTest isPractice={true} />,
    <FillingBlankTest isPractice={true} />,
  ];
  return targets[props.type];
};

export default PracticePage;
