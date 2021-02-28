import React from "react";

import "../css/SizePicker.css";
const Size = ({ size }) => {
  return (
    <div className="size-elmt d-flex justify-content-center align-items-center">
      {size}px
    </div>
  );
};

export default Size;
