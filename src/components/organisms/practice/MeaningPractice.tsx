import React, { useState, useEffect } from "react";
import QuizApi from "../../../lib/api/QuizApi";
import Flex from "../../atoms/layouts/Flex";
import Text from "../../atoms/Text";
import { MeaningQuiz } from "../../../lib/Interfaces";
import Button from "../../atoms/Button";
import Modal from "../../atoms/layouts/Modal";
import { useMediaQuery } from "react-responsive";
import {
  Article,
  Item,
  List,
  ListWrapper,
  PagingWrapper,
} from "../../atoms/common/styles";

const MeaningPractice = () => {
  const [test, setTest] = useState<MeaningQuiz[]>([]);
  const [quizId, setQuizId] = useState(-1);
  const [curIdx, setCurIdx] = useState<number>(0);
  const [answers, setAnswers] = useState<string[][]>(Array(20).fill([]));
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [modalText, setModalText] = useState("");

  useEffect(() => {
    QuizApi.getSentencePractice(0).then((res) => {
      console.log(res);
      if (res.status === 200) {
        setTest(res.data.meaningProblems);
      }
    });
  }, []);

  const list: HTMLElement | null = document.querySelector("#study-list");
  const moveItem = async (idx: number) => {
    if (idx === -1 || idx === test.length) return;
    setCurIdx(idx);
    list!.style.left = `${-100 * idx}dvw`;
  };

  const selectAnswer = (choice: string[], idx: number) => {
    let temp = [...answers];
    temp[idx] = choice;
    setAnswers(temp);
    moveItem(curIdx + 1);
  };

  const submit = () => {
    // console.log(answers);
    let allAnswered = true;
    for (let i = 0; i < 20; i++) {
      if (answers[i].length === 0) {
        allAnswered = false;
        break;
      }
    }
    if (!allAnswered) {
      setModalText("아직 답을 선택하지 않은 문항이 있어요");
      return;
    }
    setHasSubmitted(true);
    moveItem(0);
  };

  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });

  return (
    <Article>
      {modalText !== "" && (
        <Modal
          type={2}
          closeModal={() => {
            setModalText("");
          }}>
          <Text>{modalText}</Text>
        </Modal>
      )}
      <Flex align="space-between" height="5dvh">
        <Text color="blue">연습하기-문장</Text>
        <Text color="blue">#{curIdx + 1}</Text>
      </Flex>
      <ListWrapper>
        <List id="study-list">
          {test.map((item: MeaningQuiz, idx: number) => {
            return (
              <Item key={`item_${idx}`}>
                <Text color="blue" fontSize={3} smallFont={1.5}>
                  {item.english}
                </Text>
                {isMobile ? (
                  <Flex direction="column" align="space-around" gap="10px">
                    {item.koreanChoices.map((choice: string[]) => {
                      return (
                        <Button
                          width="80%"
                          height="120px"
                          fontSize={1.5}
                          smallFont={0.7}
                          type={answers[idx] === choice ? "bg" : "border"}
                          color={
                            hasSubmitted &&
                            JSON.stringify(item.originalKorean) ===
                              JSON.stringify(choice)
                              ? "blue"
                              : "pink"
                          }
                          onClick={() => {
                            selectAnswer(choice, idx);
                          }}>
                          {choice.map((mean: string) => {
                            return (
                              <div style={{ margin: "10px 0" }}>{mean}</div>
                            );
                          })}
                        </Button>
                      );
                    })}
                  </Flex>
                ) : (
                  <Flex align="space-around">
                    {item.koreanChoices.map((choice: string[]) => {
                      return (
                        <Button
                          width="22%"
                          height="30dvh"
                          fontSize={1.5}
                          smallFont={0.7}
                          type={answers[idx] === choice ? "bg" : "border"}
                          color={
                            hasSubmitted &&
                            JSON.stringify(item.originalKorean) ===
                              JSON.stringify(choice)
                              ? "blue"
                              : "pink"
                          }
                          onClick={() => {
                            selectAnswer(choice, idx);
                          }}>
                          {choice.map((mean: string) => {
                            return (
                              <div style={{ margin: "10px 0" }}>{mean}</div>
                            );
                          })}
                        </Button>
                      );
                    })}
                  </Flex>
                )}
              </Item>
            );
          })}
        </List>
      </ListWrapper>

      <PagingWrapper>
        <Flex align="center" gap="4dvw">
          <Button
            width="10dvw"
            height="50px"
            onClick={() => {
              moveItem(curIdx - 1);
            }}
            type="border"
            color="blue">
            <img src={process.env.PUBLIC_URL + "/icons/left-blue.svg"} />
          </Button>
          {curIdx < test.length - 1 ? (
            <Button
              width="10dvw"
              height="50px"
              onClick={() => {
                moveItem(curIdx + 1);
              }}
              type="border"
              color="blue">
              <img src={process.env.PUBLIC_URL + "/icons/right-blue.svg"} />
            </Button>
          ) : (
            <Button width="10dvw" height="50px" onClick={submit}>
              제출하기
            </Button>
          )}
        </Flex>
        <Flex wrap="wrap" align="center" gap="2dvw">
          {answers.map((val: string[], idx: number) => {
            return (
              <Button
                width="50px"
                height="50px"
                smallFont={1}
                type={val.length !== 0 ? "bg" : "border"}
                onClick={() => {
                  moveItem(idx);
                }}>
                {idx + 1}
              </Button>
            );
          })}
        </Flex>
      </PagingWrapper>
    </Article>
  );
};

export default MeaningPractice;
