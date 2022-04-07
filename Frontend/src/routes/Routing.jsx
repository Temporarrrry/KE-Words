import MainPage from "pages/MainPage";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Path from "./Path";

function Routing() {
	return (
		<Routes>
			<Route path={Path.Main} element={<MainPage />} />
		</Routes>
	);
}

export default Routing;
