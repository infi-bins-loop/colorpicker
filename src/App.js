import React, { useState } from 'react';
import './App.css';
import ColorPicker from '../src/components/ColorPicker/colorpicker';

const colors = [
  '#FF5733',
  '#33FF57',
  '#5733FF',
  '#FFFF33',
  '#33FFFF',
  '#FF33FF',
  '#FF5733',
  '#33FF57',
  '#5733FF',
  '#FFFF33',
  '#33FFFF',
  '#FF33FF',
  '#33FF57',
  '#5733FF',
  '#FFFF33',
  '#33FFFF',
];

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div className="App" style={{ backgroundColor }}>
      <ColorPicker colors={colors} onColorChange={handleColorChange} />
    </div>
  );
}

export default App;
