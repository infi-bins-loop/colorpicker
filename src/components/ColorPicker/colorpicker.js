import React, { useState } from 'react';
import './colorpicker.css';

const ColorPicker = ({ colors, onColorChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setIsOpen(false);
    onColorChange(color);
  };

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        Pick a color
      </button>
      {isOpen && (
        <div className="color-list">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-option"
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      )}
      {selectedColor && (
        <div>
          <p>Selected Color: {selectedColor}</p>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
