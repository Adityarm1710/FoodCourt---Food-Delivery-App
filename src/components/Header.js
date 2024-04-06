import { useState } from "react";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../constants/useOnlineStatus";
import { useSelector } from "react-redux";

export const Header = () => {
  
  const [logdata, setlogdata] = useState("Login");
  const status= useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);

  return (

    <div className="flex justify-between  bg-pink-100 shadow-md">
      <div className="flex items-center ml-2">
        <img
          className="w-20"
          src="https://images-workbench.99static.com/uNN5i13HsdTZqMFxxZ96TF1vPXY=/99designs-contests-attachments/118/118612/attachment_118612943"
        />
      </div>
      <div className="flex items-center ">
        <ul className="flex p-2 m-2 justify-between font-bold">
          <li className="p-4 text-lg">
            Online Status: { status? "✔" : "🚨" }
          </li>
          <li className="p-4 text-lg">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="p-4 text-lg">
            <Link className="link" to="/About">
              About
            </Link>
          </li>
          <li className="p-4 text-lg">
            <Link className="link" to="/Contact">
              Contact
            </Link>
          </li>
          <li className="p-4 text-lg mr-3">
            <Link to="/Cart">
              Cart- ({cartItems.length} items)
            </Link>
          </li>
          <li className="p-3">
            <button
              className="bg-pink-600 border-solid px-2 py-2"
              onClick={() => {
                logdata === "Login"
                  ? setlogdata("Logout")
                  : setlogdata("Login");
              }}
            >
              {logdata}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
//export default Headers;
