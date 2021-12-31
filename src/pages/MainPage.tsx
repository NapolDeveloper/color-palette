import React from 'react';
import styled from 'styled-components';
import ColorPicker from '../components/ColorPicker/ColorPicker';

import { PickerSketch, PickerBlock } from '../components/ColorPicker/ColorPicker';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  height: 100%;
`;

const MainPage: React.FC = () => {
  return (
    <Container>
      <PickerSketch />
      {/* <PickerBlock /> */}
    </Container>
  );
};

export default MainPage;
