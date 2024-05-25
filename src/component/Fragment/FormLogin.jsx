import { useEffect, useRef, useState } from "react";
import Button from "../Element";
import InputForm from "../Input";
import login from "../../services/auth.service";


export default function FormLogin() {
  const  [loginFailed, setLoginFailed] = useState("")
  function handleLogin(e) {
    e.preventDefault();

    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    login(data,(status, res)=>{
      if(status){
        localStorage.setItem("token", res)
        window.location.href = "/product"
      }else{
        setLoginFailed(res.response.data)
      }
    });

  }
  const errorRef = useRef(null)

  useEffect(() => {
    errorRef.current.style.display = "block";
  }, [loginFailed]);
  const usernameRef = useRef(null);
  useEffect(() => {
    usernameRef.current.focus();
  }, []);
  return (
    <>
    
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4"
      >
        
        <h2 className=" font-bold text-lg text-blue-500 font-sans">LOGIN</h2>
        <div ref={errorRef} className="flex justify-center items-center ">
      <h1 className="text-sm  text-red-600">{loginFailed}</h1>
    </div>
        <InputForm
        id="username"
        label="Username"
        name="username"
        type="text"
        placeholder="Jhon Doom"
        ref={usernameRef}
        />
        <InputForm
        id="password"
        label="Password"
        name="password"
        type="password"
        placeholder="Password"
        />
        

        <Button title={"login"} type={"submit"} />
      </form>
      
    </>
  );
}
