import React, { useState, useCallback } from 'react';
import { SketchPicker, ColorResult, BlockPicker } from 'react-color';

const ColorPicker: React.FC = () => {
  return <div>ds</div>;
};

export const PickerSketch: React.FC = () => {
  const [color, setColor] = useState<ColorResult>();

  const { rgb } = color || {};
  const updateColor = useCallback((color: ColorResult) => setColor(color), []);
  return (
    <div>
      <SketchPicker color={rgb} onChange={updateColor} />
    </div>
  );
};

export const PickerBlock: React.FC = () => {
  const [color, setColor] = useState<ColorResult>();

  const { rgb } = color || {};
  const updateColor = useCallback((color: ColorResult) => setColor(color), []);
  return (
    <div>
      <BlockPicker color={rgb} onChange={updateColor} />
    </div>
  );
};

export default ColorPicker;
