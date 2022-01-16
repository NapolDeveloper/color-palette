import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@mui/styles';

import SignupForm from '../components/SignupForm/SignupForm';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  height: 100%;
`;

const SignupPage: React.FC = () => {
  return (
    <Container>
      <SignupForm />
    </Container>
  );
};

export default SignupPage;
