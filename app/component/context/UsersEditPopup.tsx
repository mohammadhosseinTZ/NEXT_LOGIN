
"use client"

import { createContext, ReactNode, useState } from "react"
interface UserContextType {
    show: boolean;
    setShow: (value: boolean) => void;
  }
  

  export const UserContext = createContext<UserContextType>({
    show: false,
    setShow: () => {},
  });
function UsersEditPopup({ children }: { children: ReactNode }) {
  
    const [show , setShow ] =useState<boolean>(false)
  return (
    <UserContext.Provider value ={{ show , setShow }}>{children}</UserContext.Provider>
  )
}

export default UsersEditPopup