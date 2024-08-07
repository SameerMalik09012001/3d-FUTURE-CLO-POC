import React from "react";

const ColorLight = ({ changeLightColor }) => {
  return (
    <div className="container">
      <div onClick={(e) => changeLightColor(e)} value="red" className="circle1"></div>
      <div onClick={(e) => changeLightColor(e)} value="orange" className="circle2"></div>
      <div onClick={(e) => changeLightColor(e)} value="green" className="circle3"></div>
      <div onClick={(e) => changeLightColor(e)} value="blue" className="circle4"></div>
      <div onClick={(e) => changeLightColor(e)} value="black" className="circle5"></div>
      <div onClick={(e) => changeLightColor(e)} value="white" className="circle6"></div>
      <input onClick={(e) => changeLightColor(e)} type="color" />
    </div>
  );
};

export default ColorLight;
