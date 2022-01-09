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
      .post('http://0f66-124-146-57-57.ngrok.io/colorPalette/login/loginCheck', form)
      .then((r) => {
        console.log(r);
        console.log('test');
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
