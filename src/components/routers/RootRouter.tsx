import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import RegisterPage from "../pages/RegisterPage";

type Props = {};

function RootRouter({}: Props) {
	return (
		<Routes>
			<Route path="/" element={<MainPage />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/register" element={<RegisterPage />} />
		</Routes>
	);
}

export default RootRouter;
