import React from 'react';
import styled from 'styled-components';

import ColorBox from '../ColorBox/ColorBox';

const Container = styled.div`
  display: grid;
  width: 900px;
  height: 700px;
  overflow: scroll;
  outline: 2px solid black;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(20%, auto));
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
