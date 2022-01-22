import React from 'react';
import styled from 'styled-components';

import ColorBox from '../ColorBox/ColorBox';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  background-color: beige;
  // 삭제할 예정
  outline: 2px solid black;
  border-radius: 10px;
  height: 700px;
  width: 1000px;
  padding: 15px;
  overflow: scroll;
`;

const BoxListContainer = () => {
  // const userName = useSelector(selectUserName);
  return (
    <Container>
      <ColorBox />
      <ColorBox />
      <ColorBox />
      <ColorBox />
      <ColorBox />
      <ColorBox />
      <ColorBox />
      <ColorBox />
      <ColorBox />
      <ColorBox />
      <ColorBox />
      <ColorBox />
      <ColorBox />
      <ColorBox />
      <ColorBox />
    </Container>
  );
};

export default BoxListContainer;
