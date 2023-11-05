import { Input, Space } from "antd";
import React, { useRef, useState } from "react";

function EditInput({ title, setValue, value }) {
  return (
    <>
      <h1>{title}</h1>
      <Input value={value} onChange={(e) => setValue(e.target.value)}></Input>
    </>
  );
}

const EditionInput = () => {
  const [state, setState] = useState("");
  console.log(state);
  return (
    <div>
      <Space>
        <EditInput
          title={"first Input"}
          setValue={setState}
          value={state}
        ></EditInput>
        <EditInput
          title={"first Input"}
          setValue={setState}
          value={state}
        ></EditInput>
      </Space>
    </div>
  );
};

export default EditionInput;
