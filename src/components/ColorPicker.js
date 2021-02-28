import React, { useState } from "react";
import classNames from "classnames";

import ColorPickerModule from "../css/ColorPicker.module.css";
import "../css/ColorPicker.css";

const ColorPicker = ( {dataSent} ) => {
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
    };
  };

  const isActive = (color) => {
    return curColor === color;
  };

  const colorList = color.map((x, index) => {
    return (
      <span
        className={classNames("color-elmt", {
          [ColorPickerModule.isActive]: isActive(x),
        })}
        key={index}
        style={colorRender(x)}
        onClick={checkActive(x)}
      >
        {" "}
      </span>
    );
  });

  const sendDataToParent = () => {
    dataSent(`text from ColorPicker`);
  }

  return <div className="colorPicker-container">
          {colorList}
          <br/>
          <button className="btn btn-warning" onClick={sendDataToParent}>click</button>
        </div>

};

export default ColorPicker;
