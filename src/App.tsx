import { BrowserRouter } from "react-router-dom";
import Header from "./components/organisms/header/Header";
import RootRouter from "./components/routers/RootRouter";

function App() {
	return (
		<BrowserRouter>
			<main>
				<Header />
				<RootRouter />
			</main>
		</BrowserRouter>
	);
}

export default App;
