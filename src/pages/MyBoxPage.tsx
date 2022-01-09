import React from 'react';
import styled from 'styled-components';

import MyBox from '../components/MyBox/MyBox';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  height: 100%;
  width: 100%;
`;

const MyBoxPage: React.FC = () => {
  return (
    <Container>
      <MyBox />
    </Container>
  );
};

export default MyBoxPage;
