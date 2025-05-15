"use client"

import { useContext } from "react"
import Button from "./Button"
import Popup from "./Popup"
import { UserContext } from "./context/UsersEditPopup"
import { delUser } from "../action/user"
import styles from "./styles.module.css"
interface User {
  "id": number,
  "fname": string,
  "lname": string,
  "username": string,
  "avatar": string,
  "email": string
}
function UsersItem({ data }: { data: User[] }) {
  const {show} = useContext(UserContext)
  const handleDelete =async (id:number)=>{
    await delUser(id)
  }
  return (
    <div>
      <p>The first 12 users do not have the ability to edit or delete. To do this, add a new item.</p>
      {
        data.map((user: User, i: number) => (
          <div key={user.id}>
            <p><span>{user.id}- </span>{user.lname}</p>
            <div className={styles.btns}>
              <Button id={user.id} lname={user.lname} />
              <button onClick={()=>handleDelete(user.id)}>delete</button>
            </div>
          </div>
        ))
      }
      { show && <Popup/> }
    </div>
  )
}

export default UsersItem