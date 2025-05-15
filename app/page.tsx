import Link from "next/link";
import style from "./page.module.css"
export default function Home() {
  return (
    <div className={style.home}>
      <h1 className="title">HOME PAGE</h1>
      <br />
      <div className={style.links}>
        <Link href={"/users"}>USERS</Link>
        <Link href={"/"}>LOGIN</Link>
        <Link href={"/"}>REGISTER</Link>
      </div>
    </div>
  );
}
