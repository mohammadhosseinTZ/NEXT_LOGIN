"use client"

import { usePathname } from "next/navigation"
import React, { createContext, ReactNode, useEffect, useState } from "react"

interface LoginT {
  id: number
  fname: string
  lname: string
  username: string
  avatar: string
  email: string
  password: string
}

interface LoginContextType {
  loginCheck: LoginT | undefined
  setLoginCheck: React.Dispatch<React.SetStateAction<LoginT | undefined>>
}

export const LoginContext = createContext<LoginContextType>({
  loginCheck: undefined,
  setLoginCheck: () => {},
})

function LoginProvider({ children }: { children: ReactNode }) {
  const [loginCheck, setLoginCheck] = useState<LoginT | undefined>(undefined)
  const [hydrated, setHydrated] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
      const stored = localStorage.getItem("user")
      if (stored) {
      try {
        setLoginCheck(JSON.parse(stored) as LoginT)
      } catch (err) {
        console.error("Invalid JSON in localStorage:", err)
      }
    }
    setHydrated(true) // بعد از hydration
  }, [])
  if (!hydrated) return null // یا می‌تونی یه لودر نشون بدی

  

  return (
    <LoginContext.Provider value={{ loginCheck, setLoginCheck }}>
      {children}
    </LoginContext.Provider>
  )
}

export default LoginProvider
