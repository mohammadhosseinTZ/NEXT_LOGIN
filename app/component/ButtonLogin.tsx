"use client"

import { useFormStatus } from "react-dom"

function ButtonLogin() {
    const {pending} = useFormStatus()
  return (
    <button  type="submit" disabled={pending}>login</button>
  )
}

export default ButtonLogin