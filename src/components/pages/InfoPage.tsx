import React from "react";
import ChangePW from "../organisms/info/ChangePW";
import Article from "../atoms/layouts/Article";

type Props = {};

const InfoPage = (props: Props) => {
  return (
    <Article marginTop="10dvh">
      <ChangePW />
    </Article>
  );
};

export default InfoPage;
