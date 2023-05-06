import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import ShowcaseA from "./components/ShowcaseA";
import ShowcaseB from "./components/ShowcaseB";

// React Component

// Navbar

const page = (
  <div id="website">
    <Navbar />
    <div className="container">
      <ShowcaseA />
      <ShowcaseB />
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(page);
