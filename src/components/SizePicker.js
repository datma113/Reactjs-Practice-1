import React, { useState } from "react";


import Size from './Size'

const SizePicker = () => {
    const size = [18, 20, 22, 24, 26];

    const [curSize, setCurSize] = useState(18);

    const checkActive = curSize => {
        return () => {
            setCurSize(curSize);
        }
    }

    const isActive = size => (curSize === size);


    const sizeList = size.map( (x, index) => {
        return <Size size={x} key={index} checkActive={checkActive(x)} isActive={ isActive(x) }/>
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
