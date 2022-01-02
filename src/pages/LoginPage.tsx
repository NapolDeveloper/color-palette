import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@mui/styles';

import LoginForm from '../components/LoginForm/LoginForm';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  height: 100%;
`;

const LoginPage: React.FC = () => {
  return (
    <Container>
      <LoginForm />
    </Container>
  );
};

export default LoginPage;
