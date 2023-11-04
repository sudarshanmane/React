import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import TravelPlan from "./Components/ChoosingTheStateStructure/Challenges/Challenge2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TravelPlan></TravelPlan>
  </React.StrictMode>
);

reportWebVitals();
