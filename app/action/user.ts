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
const edit = async (lname:string , id:number)=>{
    const res = await fetch("https://www.melivecode.com/api/users/update" , {
       
        method:"PUT",
        headers:{
            "Content-Type": "application/json", 
            "Accept": "application/json",        
          },
        
        body:JSON.stringify({
            "id" : id ,
            "lname" : lname ,
        })
    })
  
    console.log(res.ok);
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
export const editUser = async (id:number , formData: FormData) => {
    const lname = formData.get("lname") as string
    edit(lname ,id );
    revalidatePath("/users")
} 
export const delUser = async (id:number) =>{
    const res = await fetch ("https://www.melivecode.com/api/users/delete" , {
        method:"DELETE" ,
        headers:{
            "Content-Type": "application/json" ,
            "Accept" : "application/json"
        },
        body :JSON.stringify({"id" : id})
    })
    if(!res.ok)return
    revalidatePath("/users")
}