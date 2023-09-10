export interface StudyItem {
  id: number;
  english: string;
  korean: string[];
  bookmarked: boolean;
}

export interface WordQuiz {
  wordId: number;
  english: string;
  koreanChoice: string[][];
  originalKorean?: string[];
}

export interface MeaningQuiz {
  sentenceId: number;
  english: string;
  koreanChoice: string[][];
  originalKorean?: string[];
}

export interface SentenceTest {
  sentenceId: number;
  originalEnglish: string[];
  blankedEnglish: string[];
  korean: string[];
}
