import React from 'react';
import Header from './components/Header/Header';
import styled from 'styled-components';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff0f0;
`;

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Container>
        <GlobalStyle />
        <Header />
        <Routes>{/* <Route path='/' element={<Main />} /> */}</Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
