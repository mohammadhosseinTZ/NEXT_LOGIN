"use client"
import Link from "next/link";
import style from "./page.module.css"
import { LoginContext } from "./component/context/Login";
import { useContext } from "react";
export default function Home() {
  const {loginCheck} = useContext(LoginContext)

  
  return (
    <div className={style.home}>
      <h1 className="title">HOME PAGE</h1>
      <br />
      <div className={style.links}>
        <Link href={"/users"}>USERS</Link>
        {loginCheck ?<Link href={"/logout"}>LOGOUT</Link>  :<Link href={"/login"}>LOGIN</Link>}
      </div>
    </div>
  );
}
