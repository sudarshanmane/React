import React from "react";

const Math = ({ a = "one", b = "two" }) => {
  return (
    <div>
      <p>Sum...</p>
      <h1>{a + b}</h1>
    </div>
  );
};

export default Math;
