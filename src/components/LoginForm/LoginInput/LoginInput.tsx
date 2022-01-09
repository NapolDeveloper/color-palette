import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Colors from '../../../styles/Colors';

// hooks
import useInput from '../../../hooks/useInput';

const theme = {
  spacing: 8
};

// styled-component
const InputWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${Colors.colorWhite};
  width: 400px;
  height: 700px;
  padding: 30px 10px;
  border-radius: 10px;
`;

const LoginTitle = styled.div`
  font-size: 36px;
  font-weight: bold;
`;

const InputForm = styled.form`
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* background-color: yellow; */
`;

// button atom으로 컴포넌트화 시켜야함
const LoginButton = styled.button`
  width: 80%;
  margin-top: 20px;
  padding: 10px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  background-color: ${Colors.primaryColor};
  color: ${Colors.colorWhite};
  font-weight: 900;
  cursor: pointer;
  transition: 0.2s ease-in;
  &:hover {
    background-color: #e384a4;
  }
`;

const SignUpButton = styled.div`
  font-size: 12px;
  color: ${Colors.colorBlack};
  text-transform: uppercase;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const InputField = styled(TextField)`
  margin-bottom: 20px;
  color: ${Colors.primaryColor};
  width: 80%;
`;

// types
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
      <LoginTitle>Login</LoginTitle>
      <InputForm onSubmit={handleSubmit}>
        <InputField
          required
          id='standard-required'
          label='Email'
          variant='standard'
          name='email'
          value={email}
          onChange={onChange}
          placeholder='Type your email'
        />
        <InputField
          required
          id='standard-required'
          label='Password'
          variant='standard'
          name='password'
          value={password}
          onChange={onChange}
          placeholder='Type your password'
          type='password'
        />
        <LoginButton type='submit'>LOGIN</LoginButton>
        <SignUpButton>SIGN UP</SignUpButton>
      </InputForm>
    </InputWrap>
  );
};

export default LoginInput;
