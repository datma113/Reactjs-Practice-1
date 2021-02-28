import React from "react";
import classNames from "classnames";

import  "../css/SizePicker.css";
import Styles from '../css/SizePicker.module.css'



const Size = ({ size, checkActive, isActive }) => {
  return (
    <div className={classNames("size-elmt d-flex justify-content-center align-items-center",{ [Styles.isActive] : isActive} )}  onClick={checkActive}>
      {size}px
    </div>
  );
};
//size-elmt d-flex justify-content-center align-items-center
export default Size;
