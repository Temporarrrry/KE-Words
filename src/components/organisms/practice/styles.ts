import styled from "styled-components";

export const Article = styled.article`
  width: 100dvw;
`;
export const PagingWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4dvh;
  @media screen and (max-width: 700px) {
    padding: 0 10%;
  }
`;
export const ListWrapper = styled.section`
  width: 100dvw;
  height: 48dvh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 700px) {
    width: 100%;
    height: 560px;
    margin-bottom: 20px;
  }
`;
export const List = styled.ul`
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  transition: all 0.3s ease-out;
`;
export const Item = styled.li`
  width: 100dvw;
  height: 40dvh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Img = styled.img`
  width: 15dvw;
  height: 5dvh;
`;
