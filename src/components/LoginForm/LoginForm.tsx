import React, { useState } from 'react';
import styled from 'styled-components';
import LoginInput from './LoginInput/LoginInput';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  height: 100%;
`;

const LoginForm: React.FC = () => {
  const onSubmit = (form: { email: string; password: string }) => {
    console.log(form);
  };

  return (
    <Container>
      <LoginInput onSubmit={onSubmit} />
    </Container>
  );
};

export default LoginForm;
