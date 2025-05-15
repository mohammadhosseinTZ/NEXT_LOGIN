"use client"

import { useContext } from "react";
import styles from "./styles.module.css"
import { UserContext } from "./context/UsersEditPopup";
import Link from "next/link";


interface Props {
    id: number;
    lname:string
}
export default function Popup({ id , lname  }:Props) {
    const {setShow} = useContext(UserContext)
    const handleClick = () => {
        setShow(true)
    };
    return (
        <div>
            <Link href={`/users?id=${id}&lname=${lname}`} onClick={handleClick}>EDIT</Link>
        </div>
    )
}

