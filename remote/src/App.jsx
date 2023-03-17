import React, { useState } from "react";
import ReactDOM from "react-dom";
import LoadingSpinner from "./components/loading-spinner/LoadingSpinner";

import "./index.scss";

const FirstCounter =
  React.lazy(() =>
    import('MFE1/Counter')
  );

const App = () => (

    <div className="mfe-container flex items-center justify-between p-8 gap-7 bg-indigo-500">
      <React.Suspense fallback={<LoadingSpinner/>}>
      <FirstCounter/>
      </React.Suspense>
      <div className="mfe border p-3 border-solid border-gray-300 bg-white">
       <h3 className="font-bold text-lg">MFE2</h3>
      </div>
    </div>
  
  
);
ReactDOM.render(<App />, document.getElementById("app"));
