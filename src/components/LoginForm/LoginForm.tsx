import React, { useState } from 'react';
import styled from 'styled-components';
import LoginInput from './LoginInput/LoginInput';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  height: 100%;
  width: 100%;
`;

const LoginForm: React.FC = () => {
  const onSubmit = async (form: { email: string; password: string }) => {
    console.log(form);
    await axios
      .post('http://localhost:8282/colorPalette/login/loginCheck', form)
      .then((r) => {
        console.log(r);
        console.log(`${form} 폼 정상적으로 작동`);
      })
      .catch((res) => {
        console.error('err');
      });
  };

  return (
    <Container>
      <LoginInput onSubmit={onSubmit} />
    </Container>
  );
};

export default LoginForm;
