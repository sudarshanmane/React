import React, { useCallback, useState } from "react";

const Example = () => {
  const [state, setstate] = useState("Enter");
  const handleSubmit = useCallback(() => {
    console.log("done");
    return state;
  }, [state]);

  return (
    <div>
      <h1>useCallback Hook 1</h1>
      <div onClick={() => setstate((state) => "data" + state)}>
        {handleSubmit()}
      </div>
      <div onClick={() => setstate("details")}> {handleSubmit()}</div>
    </div>
  );
};

export default Example;
