import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SentenceResult } from "../lib/Interfaces";
import { useMediaQuery } from "react-responsive";
import Modal from "../components/atoms/layouts/Modal";
import Text from "../components/atoms/Text";
import Flex from "../components/atoms/layouts/Flex";
import Button from "../components/atoms/Button";
import {
  Article,
  Item,
  List,
  ListWrapper,
  PagingWrapper,
} from "../components/atoms/common/styles";
import QuizApi from "../lib/api/QuizApi";

const SentenceQuizResultPage = () => {
  const { id } = useParams();
  const [test, setTest] = useState<SentenceResult[]>([]);
  const [curIdx, setCurIdx] = useState<number>(0);
  const [modalText, setModalText] = useState("");

  useEffect(() => {
    QuizApi.getQuizDetail(false, id!).then((res) => {
      if (res.status === 200) {
        setTest(res.data.problemResults);
      }
    });
  }, []);

  const list: HTMLElement | null = document.querySelector("#study-list");
  const moveItem = async (idx: number) => {
    if (idx === -1 || idx === test.length) return;
    setCurIdx(idx);
    list!.style.left = `${-100 * idx}dvw`;
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
        <Text color="blue">시험결과-문장</Text>
        <Text color="blue">#{curIdx + 1}</Text>
      </Flex>
      <ListWrapper>
        <List id="study-list">
          {test.map((item: SentenceResult, idx: number) => {
            return (
              <Item key={`item_${idx}`}>
                <Text color="blue" fontSize={3} smallFont={1.5}>
                  {item.english.join(" ")}
                </Text>
                {isMobile ? (
                  <Flex direction="column" align="space-around" gap="10px">
                    {item.editedEnglishOrKoreanChoices.map((choice: string) => {
                      return (
                        <Button
                          key={`m_${idx}_choice_${choice}`}
                          width="80%"
                          height="120px"
                          fontSize={1.5}
                          smallFont={0.7}
                          type={
                            item.userAnswer.join(" ") === choice
                              ? "bg"
                              : "border"
                          }
                          color={
                            item.originalKorean === choice ? "blue" : "pink"
                          }
                          onClick={() => {}}>
                          {choice}
                        </Button>
                      );
                    })}
                  </Flex>
                ) : (
                  <Flex align="space-around">
                    {item.editedEnglishOrKoreanChoices.map((choice: string) => {
                      return (
                        <Button
                          key={`${idx}_choice_${choice}`}
                          width="22%"
                          height="30dvh"
                          fontSize={1.5}
                          smallFont={0.7}
                          type={
                            item.userAnswer.join(" ") === choice
                              ? "bg"
                              : "border"
                          }
                          color={
                            item.originalKorean === choice ? "blue" : "pink"
                          }
                          onClick={() => {}}>
                          {choice}
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
        </Flex>
        <Flex wrap="wrap" align="center" gap="2dvw">
          {test.map((val, idx: number) => {
            return (
              <Button
                width="50px"
                height="50px"
                smallFont={1}
                type="bg"
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

export default SentenceQuizResultPage;
