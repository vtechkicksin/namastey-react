/*
 *    <div id="parent">
 *       <div id="child">
 *            <h1></h1>
 *        </div>
 *    </div>
 */
import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "hello world from react!"
);
const head = (
  <h1 className="heading" tabIndex="5">
    Is this jsx
  </h1>
);

console.log("hey>>>>>>", head);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(head);
