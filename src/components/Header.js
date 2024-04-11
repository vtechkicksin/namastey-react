import { LOGO_URL } from "../../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Headers = () => {
  const [btnName, setBtnName] = useState("login");

  // If no dependency array => useEffect is called on every render. (useEffect is called after the component got render)
  // If dependency array is passed and it is empty then useEffect is called only for the one time.
  // if dependency arrr is [arr] means, we have put something inside dependency array then it is called eveyTime arr is updated
  useEffect(() => {});
  const onlineStatus = useOnlineStatus();

  // subscribing to the store using our selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-100 drop-shadow-xl">
      <div className="logo-container px-4">
        <img className="w-[100px] h-[100px]" src={LOGO_URL} />
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
          <li className="px-4 font-bold text-lg">
            <Link to="/Cart">Cart - ({cartItems.length} item)</Link>
          </li>
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
