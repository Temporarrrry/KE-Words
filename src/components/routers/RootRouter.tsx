import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";

type Props = {};

function RootRouter({}: Props) {
	return (
		<Routes>
			<Route path="/" element={<MainPage />} />
		</Routes>
	);
}

export default RootRouter;
