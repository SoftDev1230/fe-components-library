import React, { useState, ChangeEvent } from 'react';

interface NumberInputProps {
  min: number;
  max: number;
  step?: number;
  onSelect: (value: number) => void;
  initialSelected?: number;
}

const NumberInput: React.FC<NumberInputProps> = ({ min, max, step = 1, onSelect, initialSelected }) => {
  const [value, setValue] = useState(initialSelected ?? min);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    if (newValue >= min && newValue <= max) {
      setValue(newValue);
      onSelect(newValue);
    }
  };

  return (
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={handleChange}
        className="w-full border border-[#414141] rounded-[20px] p-[20px] bg-gray-200 text-gray-700 focus:outline-none focus:border-blue-500"
      />
  );
};

export default NumberInput;
