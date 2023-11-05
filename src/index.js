import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Accordion from "./Components/SharingStateBetweenComponents/LiftingStateUp";
import EditionInput from "./Components/SharingStateBetweenComponents/Challenge1";
import FileteringList from "./Components/SharingStateBetweenComponents/Challenge2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FileteringList></FileteringList>
  </React.StrictMode>
);

reportWebVitals();
