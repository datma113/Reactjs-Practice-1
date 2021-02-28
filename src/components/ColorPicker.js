import React, { useState } from "react";
import classNames from "classnames";

import "../css/ColorPicker.css";

const ColorPicker = () => {
  const color = ["red", "green", "blue", "orange", "yellow"];

  const [curColor, setCurColor] = useState("red");

  const colorRender = (color) => {
    return {
      backgroundColor: color,
    };
  };

  const checkActive = (curColor) => {
      return () => {
        setCurColor(curColor);
      }
   
  };

  const isActive = (color) => {
    return curColor === color;
  };

  const colorList = color.map((x, index) => {
    return (
      <span
        className={classNames("color-elmt", { isActive: isActive(x) })}
        key={index}
        style={colorRender(x)}
        onClick={checkActive(x)}
      >
        {" "}
      </span>
    );
  });

  return <div className="colorPicker-container">{colorList}</div>;
};

export default ColorPicker;
