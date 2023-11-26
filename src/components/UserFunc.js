import { useEffect, useState } from "react";

const UserFunc = (props) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log("useEffect call " + props.name + " componentDidMount");
  }, []);

  console.log("Render " + props.name + " function Component");
  return (
    <div className="user-card">
      <h2>count: {count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        IncreaseCOunt
      </button>
      <h2>{props.name}</h2>
    </div>
  );
};

export default UserFunc;
