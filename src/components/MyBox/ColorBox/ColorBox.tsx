import React from 'react';
import styled from 'styled-components';
import Colors from '../../../styles/Colors';

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 80%;
  border-radius: 10px;
  background-color: #01ebd3;
  position: relative;
  &:hover {
    &:after {
      height: 100%;
    }
    // hover시 boxtitle opacity  설정
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
  opacity: 0;
  transition: 0.3s ease-in-out;
  ${ColorContainer}:hover & {
    opacity: 1;
  }
`;

const ColorBox = () => {
  return (
    <Container>
      <ColorContainer>
        <BoxTitle>Title test</BoxTitle>
      </ColorContainer>
      <HeartBox />
    </Container>
  );
};

const HeartContainer = styled.div`
  display: inline-flex;
  align-items: center;
  width: 100px;
  height: 30px;
  border: 1px solid #ececec;
  border-radius: 10px;
  padding: 3px 5px;
  transition: 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: #f6f6f6;
  }
`;
const HeartIcon = styled.div`
  font-size: 20px;
  color: red;
  margin-left: 3px;
  svg {
    vertical-align: middle;
  }
`;

// 즐겨찾기 버튼
const HeartBox = () => {
  return (
    <HeartContainer>
      <HeartIcon>
        {/* // color box faborites true or false에 따라 다른 아이콘 보여주기 */}
        <AiFillHeart />
      </HeartIcon>
    </HeartContainer>
  );
};

export default ColorBox;
