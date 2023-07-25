import React, { useEffect, useState } from "react";
import UserStore from "../../../stores/UserStore";
import Hooks from "../../../lib/Hooks";
import styled from "styled-components";
import Text from "../../atoms/Text";
import Button from "../../atoms/Button";
import Flex from "../../atoms/layouts/Flex";

type Props = {
  type: number; // 0: word, 1: sentence
};

const Study = (props: Props) => {
  const { lastWord, lastSentence, setLastWord } = UserStore();

  const [curId, setCurId] = useState<number>(lastWord);
  const [curIdx, setCurIdx] = useState<number>(0);
  const [items, setItems] = useState<Word[]>([]);
  useEffect(() => {
    if (props.type === 0) {
      Hooks.getWords(lastWord).then((res) => {
        if (res.status === 200) {
          if (res.data.length === 0) {
            getMore(0);
          } else {
            setItems(res.data);
          }
        } else {
          alert("서버 에러");
        }
      });
    }
  }, []);

  const getMore = async (id: number) => {
    await Hooks.getWords(id / 20).then((res) => {
      if (res.status === 200) {
        if (res.data.length === 0) {
          getMore(0);
        } else {
          setLastWord(id);
          setItems([...items, ...res.data]);
        }
      } else {
        alert("서버 에러");
      }
    });
  };

  const list: HTMLElement | null = document.querySelector("#study-list");
  const moveItem = (idx: number) => {
    if (idx === -1 || idx === items.length) return;
    else if (idx === items.length - 2) {
      getMore(curId + 2);
    }
    list!.style.left = `${-100 * idx}dvw`;
    setCurIdx(idx);
    setCurId(items[idx].id);
  };

  return (
    <Article>
      <Flex align="space-between" height="5dvh">
        <Text type="blue">공부하기</Text>
        <Text type="blue">#{curId}</Text>
      </Flex>
      <ListWrapper>
        <List id="study-list">
          {items.map((word, idx) => {
            return (
              <Item>
                <Text color="blue" fontSize="title">
                  {word.english}
                </Text>
                <Flex gap="10px" direction="column">
                  {word.korean.map((mean, idx) => {
                    return (
                      <Text color="pink" fontSize="large">
                        {idx + 1}. {mean}
                      </Text>
                    );
                  })}
                </Flex>
              </Item>
            );
          })}
        </List>
      </ListWrapper>
      <Flex align="center" gap="4dvw">
        <Button
          type="button"
          title="left"
          onClick={() => {
            moveItem(curIdx - 1);
          }}
          buttonType="border"
          color="blue"
          width="15dvw"
          height="5dvh">
          <img src="/src/assets/icons/left-blue.svg" />
        </Button>
        <Button
          type="button"
          title="right"
          onClick={() => {
            moveItem(curIdx + 1);
          }}
          buttonType="border"
          color="blue"
          width="15dvw"
          height="5dvh">
          <img src="/src/assets/icons/right-blue.svg" />
        </Button>
      </Flex>
    </Article>
  );
};

const Article = styled.article`
  width: 100dvw;
  height: 75dvh;
  display: flex;
  flex-direction: column;
  justify-contents: space-between;
  padding-top: 10dvh;
`;
const ListWrapper = styled.div`
  width: 100dvw;
  height: 50dvh;
  position: relative;
  overflow: hidden;
`;
const List = styled.ul`
  height: 40dvh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  transition: all 0.3s ease-out;
`;
const Item = styled.li`
  width: 100dvw;
  height: 40dvh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default Study;
