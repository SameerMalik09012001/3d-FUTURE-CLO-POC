import React from 'react';

const Dropdown = ({ setCurEnvironment, environments }) => {
  return (
    <div className="dropdown">
      <select
        className="en1"
        onChange={(e) => {
          setCurEnvironment(environments.find((item) => e.target.value === item.name));
        }}
      >
        {environments.map((en) => (
          <option key={en.name} className='en' value={en.name}>
            {en.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
