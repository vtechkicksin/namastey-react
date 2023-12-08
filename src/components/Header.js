import { LOGO_URL } from "../../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Headers = () => {
  const [btnName, setBtnName] = useState("login");

  // If no dependency array => useEffect is called on every render. (useEffect is called after the component got render)
  // If dependency array is passed and it is empty then useEffect is called only for the one time.
  // if dependency arrr is [arr] means, we have put something inside dependency array then it is called eveyTime arr is updated
  useEffect(() => {});
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-50 drop-shadow-xl">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status : {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">Abount us</Link>
          </li>
          <li className="px-4">
            <Link to="/ContactUs">Contact us</Link>
          </li>
          <li className="px-4">Cart</li>
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
