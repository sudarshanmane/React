import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import EditProfile from "./Components/ManagingState/ReactingToTheInput/Challenge2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <EditProfile></EditProfile>
  </React.StrictMode>
);

reportWebVitals();
