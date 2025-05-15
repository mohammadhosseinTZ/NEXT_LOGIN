import { createUser } from "../action/user";
import UsersItem from "../component/UsersItem";
import styles from "./styles.module.css"

const getData = async () => {
  try {
    const res = await fetch("https://www.melivecode.com/api/users", { cache: "no-store" })
    if (!res.ok) {
      throw new Error("Failed to fetch users");
    }
    return await res.json();
  } catch (error) {
    return { error: "NOTHING TO SHOW ..." }
  }

}

async function Users() {
  const data = await getData();

  return (
    <div>
      <h1 className="title">Users:</h1>
      <div className={styles.wrapper}>
        <div>
          {data.error ? data.error :
            <UsersItem data={data} />
          }
        </div>
        <div>
          <form action={createUser}>
            <div>
              <label htmlFor="">lname</label>
              <input type="text" name="lname" id="" />
            </div>
            <div>
              <label htmlFor="">fname</label>
              <input type="text" name="fname" id="" />
            </div>
            <div>
              <label htmlFor="">username</label>
              <input type="text" name="username" id="" />
            </div>
            <div>
              <label htmlFor="">password</label>
              <input type="text" name="password" id="" />
            </div>
            <div>
              <label htmlFor="">email</label>
              <input type="text" name="email" id="" />
            </div>
            <div>
              <label htmlFor="">avatar</label>
              <input type="text" name="avatar" id="" />
            </div>
            <button type="submit" className={styles.button}>ADD USER</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Users

