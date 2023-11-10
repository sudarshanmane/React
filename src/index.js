import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Accordion from "./Components/SharingStateBetweenComponents/LiftingStateUp";
import EditionInput from "./Components/SharingStateBetweenComponents/Challenge1";
import FileteringList from "./Components/SharingStateBetweenComponents/Challenge2";
import Messenger from "./Components/ExtractingStateLoginIntoReducer/Challenge1";
import Page from "./Components/PassingDataDeeplyWithContext/App";
import ImageBarcodeReader from "./Components/PassingDataDeeplyWithContext/BarcodeReader";
import Context01 from "./Components/PassingDataDeeplyWithContext/ContextTrile";
import TaskApp from './Components/ScalingUpwithReducerandContext/ScallingApp';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TaskApp></TaskApp>
  </React.StrictMode>
);

reportWebVitals();
