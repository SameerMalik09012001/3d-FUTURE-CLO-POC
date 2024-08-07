import React from "react";

const Color = ({ handleDragStart }) => {
  return (
    <div className="container">
      <div draggable onDragStart={(e) => handleDragStart(e)} value="red" className="circle1"></div>
      <div draggable onDragStart={(e) => handleDragStart(e)} value="orange" className="circle2"></div>
      <div draggable onDragStart={(e) => handleDragStart(e)} value="green" className="circle3"></div>
      <div draggable onDragStart={(e) => handleDragStart(e)} value="blue" className="circle4"></div>
      <div draggable onDragStart={(e) => handleDragStart(e)} value="black" className="circle5"></div>
      <div draggable onDragStart={(e) => handleDragStart(e)} value="white" className="circle6"></div>
      <input draggable onDragStart={(e) => handleDragStart(e)} type="color" />
    </div>
  );
};

export default Color;
