import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex-basis: 23%;
  display: flex;
  flex-direction: column;
  background-color: blue;
  height: 200px;
  padding: 0 5px;
  margin-top: 20px;
`;

const ColorBox = () => {
  return <Container></Container>;
};

export default ColorBox;
