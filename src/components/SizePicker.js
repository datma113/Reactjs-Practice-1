import React, { useState } from "react";
import classNames from "classnames";

import "../css/ColorPicker.css";
import Size from './Size'

const SizePicker = () => {
    const size = [18, 20, 22, 24, 26];

    const sizeList = size.map( (x, index) => {
        return <Size size={x} key={index} />
    })


    return (
        <div className="colorPicker-container">
            <div className="ml-5 d-flex flex-row">
                {sizeList}
            </div>
          
        </div>
    )
}

export default SizePicker
