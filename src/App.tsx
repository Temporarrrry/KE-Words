import { BrowserRouter } from "react-router-dom";
import Header from "./components/organisms/header/Header";
import RootRouter from "./components/routers/RootRouter";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <RootRouter />
      </main>
    </BrowserRouter>
  );
}

export default App;
