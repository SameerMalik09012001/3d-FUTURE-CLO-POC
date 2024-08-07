import React from 'react';

const Range = ({title, setIntensity, lightIntensity, min, max, step}) => {
    return (
      <div className="range-container">
        <input
          type="range"
          onChange={(e) => setIntensity(parseFloat(e.target.value))}
          defaultValue={lightIntensity}
          min={min}
          max={max}
          step={step}
        />
        <div className="range-value">
          {title}: {lightIntensity}
        </div>
      </div>
    );
}

export default Range;
