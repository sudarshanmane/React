import { useState } from "react";

function Clock(props) {
  const [color, setColor] = useState(props.color);

  return <h1 style={{ color: props.color }}>{props.time}</h1>;
}

export default function Challenge1() {
  return <Clock props={{ color: "blue" }}></Clock>;
}
