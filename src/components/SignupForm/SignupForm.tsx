import React, { useState } from 'react';
import styled from 'styled-components';
import SignupInput from './SignupInput/SignupInput';
import axios from 'axios';
import Server from '../../data/Server';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  height: 100%;
  width: 100%;
`;

const SignupForm: React.FC = () => {
  const onSubmit = async (form: { email: string; password: string; name: string }) => {
    console.log(form);
    await axios
      .post(`${Server.serverUrl}/colorPalette/login/`, form)
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
      <SignupInput onSubmit={onSubmit} />
    </Container>
  );
};

export default SignupForm;
