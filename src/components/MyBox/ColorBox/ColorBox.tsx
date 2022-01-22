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
  position: relative;
  &:hover {
    &:after {
      height: 100%;
    }
  }
  &:after {
    position: absolute;
    z-index: 1;
    content: '';
    width: 100%;
    height: 0;
    opacity: 0.4;
    left: 0;
    top: 0;
    border-radius: 10px;
    background-color: ${Colors.colorBlack};
    transition: 0.3s ease-in-out;
    cursor: pointer;
  }
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
