import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Colors from '../../../styles/Colors';

// hooks
import useInput from '../../../hooks/useInput';

const InputWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const InputForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
// button atom으로 컴포넌트화 시켜야함
const LoginButton = styled.button`
  width: 100%;
  margin-top: 20px;
  padding: 20px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${Colors.primaryColor};
  color: ${Colors.colorWhite};
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s ease-in;
  &:hover {
    background-color: #e384a4;
  }
`;

type MyFormProps = {
  onSubmit: (form: { email: string; password: string }) => void;
};

const LoginInput: React.ElementType = ({ onSubmit }: MyFormProps) => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const { email, password } = form; // 객체 비구조화 할당

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      email: '',
      password: ''
    }); // 초기화
  };

  return (
    <InputWrap>
      <InputForm onSubmit={handleSubmit}>
        <TextField name='email' value={email} onChange={onChange} placeholder='email' />
        <TextField name='password' value={password} onChange={onChange} placeholder='password' />
        <LoginButton type='submit'>로그인</LoginButton>
      </InputForm>
    </InputWrap>
  );
};

export default LoginInput;
