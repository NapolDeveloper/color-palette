import React from 'react';
import styled from 'styled-components';
import Colors from '../../styles/Colors';

import BoxListContainer from './BoxListContainer/BoxListContainer';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  height: 100%;
  width: 100%;
`;

const MyBox = () => {
  return (
    <Container>
      <BoxListContainer />
    </Container>
  );
};

const NewBtn = styled.button`
  width: 80%;
  margin-top: 20px;
  padding: 10px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  background-color: ${Colors.primaryColor};
  color: ${Colors.colorWhite};
  font-weight: 900;
  cursor: pointer;
  transition: 0.2s ease-in;
  &:hover {
    background-color: #e384a4;
  }
`;

const NewButton = () => {
  return <NewBtn>New</NewBtn>;
};

export default MyBox;
