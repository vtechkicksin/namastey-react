const heading = React.createElement(
  "h1",
  { id: "heading", abc: "xyz" },
  "Hello world ji!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
