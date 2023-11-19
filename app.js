/*
 *    <div id="parent">
 *       <div id="child">
 *            <h1></h1>
 *        </div>
 *    </div>
 */
import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "this is what react is"),
    React.createElement("h2", {}, "this is h2 react tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "this is what react is"),
    React.createElement("h2", {}, "this is h2 react tag"),
  ]),
]);
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "hello world from react!"
// );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
