import React from 'react';
import Header from './components/Header/Header';
import styled from 'styled-components';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';

// Pages
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import MyBoxPage from './pages/MyBoxPage';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: lightblue;
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: blue; ;
`;

// 라우팅용 컴포넌트
/*
const MainRoute: React.FC = () => {
  return (
    <Content>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </Content>
  );
};
*/

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/mybox' element={<MyBoxPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
