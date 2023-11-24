import { LOGO_URL } from "../../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Headers = () => {
  const [btnName, setBtnName] = useState("login");
  console.log("Component Render");

  // If no dependency array => useEffect is called on every render. (useEffect is called after the component got render)
  // If dependency array is passed and it is empty then useEffect is called only for the one time.
  // if dependency arrr is [arr] means, we have put something inside dependency array then it is called eveyTime arr is updated
  useEffect(() => {
    console.log("useEffect called");
  });
  console.log("all gets render");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Abount us</Link>
          </li>
          <li>
            <Link to="/Contact">Contact us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "login" ? setBtnName("logout") : setBtnName("login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Headers;
