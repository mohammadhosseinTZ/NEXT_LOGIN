"use server"

import { revalidatePath } from "next/cache"

interface User {
    "fname": string,
    "lname": string,
    "username": string,
    "password": string,
    "email": string,
    "avatar": string
}

const create = async (user:User)=>{
    const res = await fetch("https://www.melivecode.com/api/users/create" , {
        cache:"no-store" , 
        method:"POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          } ,
        body:JSON.stringify(user)
    })
    if(!res.ok)return
    return await res.json()
}
export const createUser = async (formData: FormData) => {
    const user: User = {
        lname: formData.get("lname") as string,
        fname: formData.get("fname") as string,
        username: formData.get("username") as string,
        password: formData.get("password") as string,
        email: formData.get("email") as string,
        avatar: formData.get("avatar") as string
      };
    
    await create(user);
    revalidatePath("/users")

} 