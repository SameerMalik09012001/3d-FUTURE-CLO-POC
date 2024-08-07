import React, { useEffect, useState } from "react";

const RangeLight = ({ title, setLightCod, LightCod, min, max, step }) => {
  const [defVal, setDefVal] = useState(() => {
    if (title === "X") return LightCod.x;
    if (title === "Y") return LightCod.y;
    if (title === "Z") return LightCod.z;
  });

  useEffect(() => {
    if (title === "X") {
      setDefVal(LightCod.x);
    } else if (title === "Y") {
      setDefVal(LightCod.y);
    } else if (title === "Z") {
      setDefVal(LightCod.z);
    }
  }, [LightCod, title]);

  const handleChange = (e) => {
    const value = parseFloat(e.target.value);
    setLightCod((prev) => {
      return {
        ...prev,
        [title.toLowerCase()]: value,
      };
    });
  };

  return (
    <div className="range-container">
      <input
        type="range"
        value={defVal || 0}
        onChange={handleChange}
        min={min}
        max={max}
        step={step}
      />
      <div className="range-value">
        {title+" "}: {LightCod[title.toLowerCase()]}
      </div>
    </div>
  );
};

export default RangeLight;
