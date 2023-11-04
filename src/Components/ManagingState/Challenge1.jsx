import { useState } from "react";

export default function Picture() {
  const [state, setState] = useState(true);

  return (
    <div
      className={`background ${state ? "background--active" : ""} `}
      style={state ? { background: "blue" } : {}}
    >
      <img
        onClick={() => setState(!state)}
        className="picture"
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
      />
    </div>
  );
}
