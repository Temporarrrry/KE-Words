export interface StudyItem {
  id: number;
  english: string;
  korean: string[];
  bookmarked: boolean;
}

export interface MeaningTest {
  wordId: number;
  english: string;
  koreanChoice: string[][];
}

export interface SentenceTest {
  sentenceId: number;
  originalEnglish: string[];
  blankedEnglish: string[];
  korean: string[];
}
