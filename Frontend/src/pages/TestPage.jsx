import React from "react";
import { useParams } from "react-router-dom";

function TestPage() {
	const { lang } = useParams();

	return <div>{lang}</div>;
}

export default TestPage;
