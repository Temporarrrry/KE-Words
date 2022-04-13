import LoginPage from "pages/LoginPage";
import MainPage from "pages/MainPage";
import RegisterPage from "pages/RegisterPage";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Path from "./Path";

function Routing() {
	return (
		<Routes>
			<Route path={Path.Main} element={<MainPage />} />
			<Route path={Path.Login} element={<LoginPage />} />
			<Route path={Path.Register} element={<RegisterPage />} />
		</Routes>
	);
}

export default Routing;
