import { useEffect, useState } from "react";
export default function useLogin(getUsername) {
    const [username , setUsername] = useState("")
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setUsername(getUsername(token));
        }  else{
            window.location.href = "/login"
        }
    },[])
    return username
}