export interface StudyItem {
  id: number;
  english: string;
  korean: string[];
  bookmarked: boolean;
}

export interface WordQuiz {
  wordId: number;
  english: string;
  koreanChoices: string[][];
  originalKorean?: string[];
  userKoreanAnswer?: string[];
}

export interface MeaningQuiz {
  sentenceId: number;
  english: string;
  koreanChoices: string[][];
  originalKorean?: string[];
  userKoreanAnswer?: string[];
}

export interface WordResult {
  wordId: number;
  english: string;
  originalKorean: string[];
  userKoreanAnswer: string[];
  koreanChoices: string[][];
  result: boolean;
}

export interface SentenceResult {
  sentenceId: number;
  english: string[];
  editedEnglishOrKoreanChoices: string[];
  userAnswer: string[];
  originalKorean: string;
  result: boolean;
}
