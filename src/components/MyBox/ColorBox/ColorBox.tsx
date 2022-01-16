import React from 'react';
import styled from 'styled-components';
import Colors from '../../../styles/Colors';

const Container = styled.div`
  flex-basis: 25%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  /* background-color: blue; */
  height: 200px;
  padding: 0 5px;
  margin-top: 20px;
`;

const ColorContainer = styled.div`
  width: 80%;
  height: 80%;
  border-radius: 10px;
  background-color: #01ebd3;
`;
const BoxTitle = styled.span`
  color: ${Colors.colorBlack};
  font-size: 16px;
  margin-top: 5px;
`;

const ColorBox = () => {
  return (
    <Container>
      <ColorContainer />
      <BoxTitle>Title test</BoxTitle>
    </Container>
  );
};

export default ColorBox;
