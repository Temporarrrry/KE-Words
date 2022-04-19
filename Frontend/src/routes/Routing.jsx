import LoginPage from "pages/LoginPage";
import MainPage from "pages/MainPage";
import RegisterPage from "pages/RegisterPage";
import StudyPage from "pages/StudyPage";
import TestPage from "pages/TestPage";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Path from "./Path";

function Routing() {
	return (
		<Routes>
			<Route path={Path.Main} element={<MainPage />} />
			<Route path={Path.Login} element={<LoginPage />} />
			<Route path={Path.Register} element={<RegisterPage />} />
			<Route path={Path.Study} element={<StudyPage />} />
			<Route path={Path.Test} element={<TestPage />} />
		</Routes>
	);
}

export default Routing;
