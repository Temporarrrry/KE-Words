import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";

type Props = {};

function RootRouter({}: Props) {
	return (
		<Routes>
			<Route path="/" element={<MainPage />} />
			<Route path="/login" element={<LoginPage />} />
		</Routes>
	);
}

export default RootRouter;
