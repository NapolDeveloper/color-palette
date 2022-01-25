import React, { useState } from 'react';
import styled from 'styled-components';
import LoginInput from './LoginInput/LoginInput';
import axios from 'axios';
import Server from '../../data/Server';

// redux
import { useDispatch } from 'react-redux';
import { setLoginTrue } from '../../redux/User/UserStateSlice';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  height: 100%;
  width: 100%;
`;

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();

  const onSubmit = async (form: { email: string; password: string }) => {
    console.log(form);
    await axios
      .post(`${Server.serverUrl}/colorPalette/login/loginCheck`, form)
      .then((r) => {
        console.log(r);
        // 로그인 반환값에 따라 dispatch 실행 여부 분기
        // 실행한 후 반환값 어떻게 오는지 확인하기
        if (r.data === 'loginSuccess') {
          const userName = r.data.name;
          dispatch(setLoginTrue({ name: `${userName}`, isLogged: true }));
        } else if (r.data === 'idFail') {
          console.log('아이디가 일치하지 않습니다.');
        } else if (r.data === 'pwFail') {
          console.log('비밀번호가 일치하지 않습니다.');
        }
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
