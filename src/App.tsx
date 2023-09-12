import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Header from "./components/organisms/header/Header";
import MainPage from "./components/pages/MainPage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import InfoPage from "./components/pages/InfoPage";
import StudySelectPage from "./components/pages/StudySelectPage";
import StudyPage from "./components/pages/StudyPage";
import PracticeSelectPage from "./components/pages/PracticeSelectPage";
import PracticePage from "./components/pages/PracticePage";
import TestSelectPage from "./components/pages/TestSelectPage";
import WordQuizPage from "./components/pages/WordQuizPage";
import MeaningQuizPage from "./components/pages/MeaningQuizPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/KE-Words_Front" element={<MainPage />} />
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
          <Route path="/practice/order" element={<PracticePage type={2} />} />
          <Route path="/practice/blank" element={<PracticePage type={3} />} />
          <Route path="/test/select" element={<TestSelectPage />} />
          <Route path="/test/word" element={<InfoPage />} />
          <Route path="/test/sentence" element={<InfoPage />} />
          <Route path="/test/order" element={<InfoPage />} />
          <Route path="/test/blank" element={<InfoPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
