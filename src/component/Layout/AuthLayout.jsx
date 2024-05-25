import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";
export default function AuthLayout({ children, type }) {
const {isDarkMode, setIsDarkMode} = useContext(DarkMode)
  return (
    <>
      <div className={`flex justify-center items-center h-screen flex-col ${isDarkMode && "bg-slate-800"}`}>
        <button className="absolute top-5 right-5" onClick={() => setIsDarkMode(!isDarkMode)}>{isDarkMode ? "☀️" : "🌙"}</button>
        {children}

        <p className="mr-1">
            {type === "login" ? "Don't have an account?" : "Already have an account?"}</p>
          <Link to={type === "login" ?  "/Register" :  "/Login"} className="text-blue-400">
            {    type === "login" ?  "Register" :  "Login"}
          </Link>
      </div>
    </>
  );
}
