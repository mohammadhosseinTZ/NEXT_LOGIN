"use client"
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LoginContext } from "../component/context/Login";

export default function LogoutPage() {
  const router = useRouter();
  const {setLoginCheck} = useContext(LoginContext)
  useEffect(() => {
    localStorage.removeItem("user");
    setLoginCheck(undefined)
    router.replace("/login");  
  }, []);

  return <p>Logging out...</p>;
}