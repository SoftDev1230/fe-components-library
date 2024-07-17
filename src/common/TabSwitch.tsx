import React, { useState } from 'react';

type TabOption = {
  label: string;
  value: string;
};

interface TabSwitchProps {
  options: TabOption[];
  onSelect: (value: string) => void;
  initialSelected?: string;
}

export const TabSwitch: React.FC<TabSwitchProps> = ({ options, onSelect, initialSelected }) => {
  const [selected, setSelected] = useState(initialSelected || options[0].value);

  const handleClick = (value: string) => {
    setSelected(value);
    onSelect(value);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="flex justify-between border border-[#414141] rounded-[20px] py-[5px]">
        <div
          className="absolute top-[5px] bottom-[5px] left-[5px] bg-gradient-to-r from-bg-green1 to-bg-green2 rounded-[17px] transition-transform duration-300"
          style={{
            width: `calc(${100 / options.length}% - 6px)`,
            transform: `translateX(calc(${options.findIndex((option) => option.value === selected) * 100}% + ${options.findIndex((option) => option.value === selected) * 6 - 3}px))`,
          }} />
        {options.map((option, index) => (
          <div key={option.value} className="relative flex-1">
            <button
              onClick={() => handleClick(option.value)}
              className={`relative w-full py-2 text-center font-semibold rounded-full focus:outline-none transition-colors duration-300 ${selected === option.value ? 'text-[#0D0D0D]' : 'text-white'
                }`}>
              {option.label}
            </button>
            {index < options.length - 1 && (
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[2px] h-3/4 bg-[#414141]"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabSwitch
