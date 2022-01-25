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
        // 가입 성공
        if (r.data === 'joinSuccess') {
          console.log('회원가입에 성공했습니다');
        }
        // 아이디 중복 가입 실패
        else if (r.data === 'joinFail') {
          console.log('회원가입에 실패했습니다 - 아이디중복');
        }
      })
      .catch((res) => {
        console.error('에러 발생');
      });
  };

  return (
    <Container>
      <SignupInput onSubmit={onSubmit} />
    </Container>
  );
};

export default SignupForm;
