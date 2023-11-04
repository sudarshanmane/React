import React, { useState } from "react";

const AppNew = ({ val, fun }) => {
  function one() {
    fun();
  }

  
  return (
    <>
      <button
        className="square"
        onClick={one}
        style={{
          width: "40px",
          height: "40px",
        }}
      >
        {val}
      </button>
    </>
  );
};

export default AppNew;
