import React, { useState } from 'react';

function RangeSlider({ min, max, step, onChange }) {
  const [value, setValue] = useState(min);

  const handleInputChange = (event) => {
    const newValue = Number(event.target.value);
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div id='range-slider'>
      <input type="range" min={min} max={max} step={step} value={value} onChange={handleInputChange}/>
    </div>
  );
}

export default RangeSlider;