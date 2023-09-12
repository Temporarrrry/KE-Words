import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Header from "./components/organisms/header/Header";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import InfoPage from "./pages/InfoPage";
import StudySelectPage from "./pages/StudySelectPage";
import StudyPage from "./pages/StudyPage";
import PracticeSelectPage from "./pages/PracticeSelectPage";
import TestSelectPage from "./pages/TestSelectPage";
import WordQuizPage from "./pages/WordQuizPage";
import MeaningQuizPage from "./pages/MeaningQuizPage";
import OrderingQuizPage from "./pages/OrderingQuizPage";
import FillingQuizPage from "./pages/FillingQuizPage";
import WordQuizResultPage from "./pages/WordQuizResultPage";
import SentenceQuizResultPage from "./pages/SentenceQuizResultPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/study/select" element={<StudySelectPage />} />
          <Route path="/study/word" element={<StudyPage isWord={true} />} />
          <Route
            path="/study/sentence"
            element={<StudyPage isWord={false} />}
          />
          <Route path="/practice/select" element={<PracticeSelectPage />} />
          <Route
            path="/practice/word"
            element={<WordQuizPage isPractice={true} />}
          />
          <Route
            path="/practice/sentence"
            element={<MeaningQuizPage isPractice={true} />}
          />
          <Route
            path="/practice/order"
            element={<OrderingQuizPage isPractice={true} />}
          />
          <Route
            path="/practice/blank"
            element={<FillingQuizPage isPractice={true} />}
          />
          <Route path="/test/select" element={<TestSelectPage />} />
          <Route
            path="/test/word"
            element={<WordQuizPage isPractice={false} />}
          />
          <Route
            path="/test/sentence"
            element={<MeaningQuizPage isPractice={false} />}
          />
          <Route
            path="/test/order"
            element={<OrderingQuizPage isPractice={false} />}
          />
          <Route
            path="/test/blank"
            element={<FillingQuizPage isPractice={false} />}
          />
          <Route path="/quiz/word/:id" element={<WordQuizResultPage />} />
          <Route
            path="/quiz/sentence/:id"
            element={<SentenceQuizResultPage />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
