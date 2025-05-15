"use client"

import { useSearchParams } from "next/navigation"
import { editUser } from "../action/user";
import styles from "./styles.module.css"
import { useContext } from "react";
import { UserContext } from "./context/UsersEditPopup";
function Popup() {
    const searchParams = useSearchParams()
    const {setShow} = useContext(UserContext)
    
    const edit = editUser.bind(null , Number (searchParams.get("id") ))
    return (
        <div className={styles.modal}>

            <form action={edit}>
                <button onClick={()=>setShow(false)} className={styles.close}>close</button>
                <h2>username: {searchParams.get("lname")}</h2>
                <br />
                <label htmlFor="">edit the name: </label>
                <input type="text" name="lname" />
                <button type="submit">EDIT</button>
            </form>
        </div>
    )
}

export default Popup