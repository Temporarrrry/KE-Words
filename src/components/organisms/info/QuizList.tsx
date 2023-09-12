import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Flex from "../../atoms/layouts/Flex";
import Button from "../../atoms/Button";
import QuizApi from "../../../lib/api/QuizApi";
import useSWR from "swr";
import Text from "../../atoms/Text";
import { Link } from "react-router-dom";

const QuizList = () => {
  const [tab, setTab] = useState(0);
  const [quizes, setQuizes] = useState<any[]>([]);
  const [wordPage, setWordPage] = useState(0);
  const [sentencePage, setSentencePage] = useState(0);

  const wordFetcher = async () => {
    return QuizApi.getQuizList(true, wordPage);
  };
  const sentenceFetcher = async () => {
    return QuizApi.getQuizList(false, sentencePage);
  };
  const wordList = useSWR(["getWordQuizList", wordPage], wordFetcher);
  const sentenceList = useSWR(
    ["getSentenceQuizList", sentencePage],
    sentenceFetcher
  );

  return (
    <Section>
      <Flex gap="10px">
        <Button
          padding="10px"
          smallpadding="10px"
          onClick={() => {
            if (tab === 0) return;
            setTab(0);
          }}
          type={tab === 0 ? "bg" : "border"}>
          단어
        </Button>
        <Button
          padding="10px"
          smallpadding="10px"
          onClick={() => {
            if (tab === 1) return;
            setTab(1);
          }}
          type={tab === 1 ? "bg" : "border"}>
          문장
        </Button>
      </Flex>
      <Divider />
      {tab === 0 ? (
        <List>
          {wordList.isLoading && (
            <Flex width="100%">
              <Text color="pink">로딩 중...</Text>
            </Flex>
          )}
          {!wordList.isLoading &&
            wordList.data.data.map((item: any) => {
              return (
                <Link
                  to={`/quiz/word/${item.quizId}`}
                  key={`word_quiz_item_${item.quizId}`}>
                  <ListItem>
                    <Text>{item.quizId}</Text>
                    <Flex align="flex-end" gap="10px">
                      <Flex align="flex-end" gap="2px">
                        <Text color="pink">{item.correctCount}</Text>
                        <Text>/</Text>
                        <Text>{item.totalCount}</Text>
                      </Flex>
                    </Flex>
                  </ListItem>
                </Link>
              );
            })}
        </List>
      ) : (
        <List>
          {sentenceList.isLoading && (
            <Flex width="100%">
              <Text color="pink">로딩 중...</Text>
            </Flex>
          )}
          {!sentenceList.isLoading &&
            sentenceList.data.data.map((item: any) => {
              return (
                <Link
                  to={`/quiz/sentence/${item.quizId}`}
                  key={`sentence_quiz_item_${item.quizId}`}>
                  <ListItem>
                    <Text>{item.quizId}</Text>
                    <Flex align="flex-end" gap="10px">
                      <Text>{item.type}</Text>
                      <Flex gap="2px">
                        <Text color="pink">{item.correctCount}</Text>
                        <Text>/</Text>
                        <Text>{item.totalCount}</Text>
                      </Flex>
                    </Flex>
                  </ListItem>
                </Link>
              );
            })}
        </List>
      )}
      <Flex align="center" gap="20px">
        <Button
          padding="10px"
          smallpadding="10px"
          onClick={() => {
            if (tab === 0) {
              if (wordPage === 0) {
                return;
              }
              setWordPage(wordPage - 1);
            } else {
              if (sentencePage === 0) {
                return;
              }
              setSentencePage(sentencePage - 1);
            }
          }}
          type="border"
          color="blue">
          <img src={process.env.PUBLIC_URL + "/icons/left-blue.svg"} />
        </Button>
        <Button
          padding="10px"
          smallpadding="10px"
          onClick={() => {
            if (tab === 0) {
              setWordPage(wordPage + 1);
            } else {
              setSentencePage(sentencePage + 1);
            }
          }}
          type="border"
          color="blue">
          <img src={process.env.PUBLIC_URL + "/icons/right-blue.svg"} />
        </Button>
      </Flex>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ccc;
  margin: 10px 0;
`;

const List = styled.ul`
  list-style: none;
  height: 440px;
  margin-bottom: 10px;
`;

const ListItem = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 10px;

  &:hover {
    background-color: #ccc;
    color: white;
  }
`;

export default QuizList;
