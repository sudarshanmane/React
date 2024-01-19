import React, { lazy, Suspense } from "react";

const OtherComponent = lazy(() => import("./Math.jsx"));

const Mathss = () => {
  return (
    <div>
      <Suspense fallback={"Loading"}>
        <OtherComponent a={2} b={3}></OtherComponent>
      </Suspense>
    </div>
  );
};

export default Mathss;
