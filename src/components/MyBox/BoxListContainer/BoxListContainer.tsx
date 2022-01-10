import React from 'react';
import styled from 'styled-components';

import ColorBox from '../ColorBox/ColorBox';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: beige;
  // 삭제할 예정
  outline: 2px solid black;
  border-radius: 10px;
  height: 700px;
  width: 80%;
  padding: 15px;
  overflow: scroll;
`;

const BoxListContainer = () => {
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
      <ColorBox />
    </Container>
  );
};

export default BoxListContainer;
