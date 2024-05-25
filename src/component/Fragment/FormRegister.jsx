import Button from "../Element"
import { useEffect, useRef, useState } from "react"
import InputForm from "../Input"

export default function FormRegister(){
  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);
    return <>
    <form
        className="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4"
        >
          <h2 className=" font-bold text-lg text-blue-500 font-sans">REGISTER</h2>

        
        <InputForm
        id="username"
        label="Username"
        name="username"
        type="text"
        placeholder="Jhon Doom"
        ref={usernameRef}
        />
        <InputForm
        id="email"
        label="email"
        name="email"
        type="email"
        placeholder="Jhon@Doom.com"
        />
        <InputForm
        id="password"
        label="password"
        name="password"
        type="password"
        placeholder="Password"
        />
         <InputForm
        id="password"
        label="password"
        name="password"
        type="password"
        placeholder="Confirm Password"
        />

        <Button title={"Register"} type={"submit"}/>

        
      </form>
    </>
}