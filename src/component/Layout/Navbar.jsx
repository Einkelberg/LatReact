import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";
import { useContext } from "react";

export default function Navbar() {
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);
  const {isDarkMode, setIsDarkMode} = useContext(DarkMode)


  useEffect(() => {
      const sum = cart.reduce((acc, item)=>{
        return acc + item.qty
      },0);
      setTotalCart(sum)
  },[cart])
  const token = localStorage.getItem("token");

  function handleLogout() {
    localStorage.removeItem("token");
  }
  return (
    <>
      <div className="flex justify-between  bg-blue-600 h-15 item-center pr-5 py-3">
        <span className="text-white py-2 px-4 font-bold text-xl">Snoopy</span>

        {/* <span className="mr-4 block text-white text-sm py-2 px-4 "> */}
          {/* {token} */}
        {/* </span> */}

        <div className="flex justify-between  bg-blue-600 h-15 item-center pr-5 py-3">

        <Link
          to="/login"
          onClick={handleLogout}
          className=" py-2  px-4 text-white bg-gray-700 hover:bg-gray-800 rounded-lg "
          >
          Logout
        </Link>
        <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5 text-white">
          {totalCart}
        </div>
        <button className="ml-2" onClick={() => setIsDarkMode(!isDarkMode)}>{isDarkMode ? "☀️" : "🌙"}</button>
        
      </div>
          </div>
    </>
  );
}
