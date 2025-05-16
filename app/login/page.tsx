"use client"
import { useFormState, useFormStatus } from "react-dom"
import { login } from "../action/auth"
import styles from "./styles.module.css"
import ButtonLogin from "../component/ButtonLogin"
import React, { useContext, useEffect } from "react"
import { LoginContext } from "../component/context/Login"
import { useRouter } from "next/navigation"

function Login() {
    const initialState = {
        error: '',
    };

    const {setLoginCheck} = useContext(LoginContext)
    const router = useRouter()
    const [state, formAction] = React.useActionState(login, initialState)

    useEffect(()=>{
        if(state.success){
            localStorage.setItem("user" , JSON.stringify(state.user))
            setLoginCheck(state.user)
            router.push("/")
        }
    } , [state])

    return (
        <div className={styles.wrapper}>
            {state.error}
            {state.success}
            <h1 className="title">LOGIN</h1>
            <form action={formAction}>
                <div>
                    <label htmlFor="">username</label>
                    <input type="text" name="username" />

                </div>
                <div>
                    <label htmlFor="">password</label>
                    <input type="password" name="password" />

                </div>
                <ButtonLogin />
            </form>
        </div>
    )
}

export default Login