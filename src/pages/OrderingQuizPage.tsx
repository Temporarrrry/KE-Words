import React from "react";
import OrderingPractice from "../components/organisms/practice/OrderingPractice";
import OrderingTest from "../components/organisms/test/OrderingTest";

type Props = {
  isPractice: boolean;
};

const OrderingQuizPage = ({ isPractice }: Props) => {
  return isPractice ? <OrderingPractice /> : <OrderingTest />;
};

export default OrderingQuizPage;
