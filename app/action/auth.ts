"use server"

import { cookies } from 'next/headers';
type LoginState = {
    error?: string;
    success?: string;
    user ?:{
        id: number,
        fname: string,
        lname: string,
        username: string,
        password: string,
        email:string,
        avatar: string
    }
};
export const login = async (state: LoginState, formData: FormData): Promise<LoginState> => {
    const username = formData.get("username") as string
    const password = formData.get("password") as string

    try {
        const res = await fetch("https://www.melivecode.com/api/login", {
            cache: "no-store",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
                "expiresIn": 60000
            })
        })
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('ok')
            }, 2000);
        })
        if (!res.ok) return { error: "something its not right" }
        const data = await res.json()
        const cookieStore = cookies();
        (await cookieStore).set({
            name: "token",
            value: data.accessToken,
            httpOnly: true
        })
        
        return { success: "login done"  , user:data.user };
    }catch(error){
        return {error :"check your internet"}
    }
    
}

