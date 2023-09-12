import React, { useState, useEffect } from "react";
import styled from "styled-components";
import UserStore from "../stores/UserStore";
import Flex from "../components/atoms/layouts/Flex";
import Text from "../components/atoms/Text";
import Button from "../components/atoms/Button";
import { StudyItem } from "../lib/Interfaces";
import StudyApi from "../lib/api/StudyApi";

type Props = {
  isWord: boolean;
};

function StudyPage({ isWord }: Props) {
  const { lastWord, lastSentence, setLastWord } = UserStore();

  const [curId, setCurId] = useState<number>(isWord ? lastWord : lastSentence);
  const [curIdx, setCurIdx] = useState<number>(0);
  const [items, setItems] = useState<StudyItem[]>([]);

  useEffect(() => {
    StudyApi.getStudyItemList(isWord, Math.floor(lastWord / 20)).then((res) => {
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
  }, []);

  const getMore = async (id: number) => {
    if (id < 2) {
      return;
    }
    await StudyApi.getStudyItemList(isWord, Math.floor(id / 20)).then((res) => {
      if (res.status === 200) {
        if (res.data.length === 0) {
          getMore(0);
        } else {
          setLastWord(id);
          if (id < curId) {
            setItems([...res.data, ...items]);
          } else setItems([...items, ...res.data]);
        }
      } else {
        alert("서버 에러");
      }
    });
  };

  const list: HTMLElement | null = document.querySelector("#study-list");
  const moveItem = async (idx: number) => {
    if (curId === 0 || idx === items.length) return;
    else if (idx === -1 && curId > 0) {
      await getMore(curId - 2);
      idx = 19;
    } else if (idx === items.length - 2) await getMore(curId + 2);
    setCurIdx(idx);
    setCurId(items[idx].id);
    list!.style.left = `${-100 * idx}dvw`;
  };

  return (
    <Article>
      <Flex align="space-between" height="5dvh">
        <Text color="blue">공부하기-{isWord ? "단어" : "문장"}</Text>
        <Text color="blue">#{curId}</Text>
      </Flex>
      <ListWrapper>
        <List id="study-list">
          {items.map((item: StudyItem) => {
            return (
              <Item key={`item_${item.id}`}>
                <Text color="blue" fontSize={3} smallFont={2}>
                  {item.english}
                </Text>
                <Flex gap="10px" direction="column">
                  {item.korean.map((mean: string, idx: number) => {
                    return (
                      <Text
                        key={`mean_${item.id}_${idx}`}
                        color="pink"
                        fontSize={2}
                        smallFont={1.5}>
                        {isWord ? `${idx + 1}. ${mean}` : mean}
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
          onClick={() => {
            moveItem(curIdx - 1);
          }}
          type="border"
          color="blue"
          width="15dvw"
          height="5dvh">
          <img src={process.env.PUBLIC_URL + "/icons/left-blue.svg"} />
        </Button>
        <Button
          onClick={() => {
            moveItem(curIdx + 1);
          }}
          type="border"
          color="blue"
          width="15dvw"
          height="5dvh">
          <img src={process.env.PUBLIC_URL + "/icons/right-blue.svg"} />
        </Button>
      </Flex>
    </Article>
  );
}

const Article = styled.article`
  width: 100dvw;
  height: 75dvh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

export default StudyPage;
