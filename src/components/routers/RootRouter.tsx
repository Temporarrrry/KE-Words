import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import RegisterPage from "../pages/RegisterPage";
import InfoPage from "../pages/InfoPage";
import QuizListPage from "../pages/QuizListPage";
import StudySelectPage from "../pages/StudySelectPage";
import TestSelectPage from "../pages/TestSelectPage";
import PracticeSelectPage from "../pages/PracticeSelectPage";

type Props = {};

function RootRouter({}: Props) {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/info" element={<InfoPage />} />
      <Route path="/study" element={<StudySelectPage />} />
      <Route path="/study/word" element={<InfoPage />} />
      <Route path="/study/sentence" element={<InfoPage />} />
      <Route path="/practice" element={<PracticeSelectPage />} />
      <Route path="/practice/word" element={<InfoPage />} />
      <Route path="/practice/sentence" element={<InfoPage />} />
      <Route path="/practice/order" element={<InfoPage />} />
      <Route path="/practice/blank" element={<InfoPage />} />
      <Route path="/test" element={<TestSelectPage />} />
      <Route path="/test/word" element={<InfoPage />} />
      <Route path="/test/sentence" element={<InfoPage />} />
      <Route path="/test/order" element={<InfoPage />} />
      <Route path="/test/blank" element={<InfoPage />} />
    </Routes>
  );
}

export default RootRouter;
