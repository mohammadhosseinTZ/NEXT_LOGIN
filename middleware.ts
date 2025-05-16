import { NextRequest, NextResponse } from "next/server";

export async function middleware  (request: NextRequest){
    if(!request.cookies.get("token")){
        return NextResponse.redirect(new URL('/logout', request.url));
    }
    const res = await fetch (" https://www.melivecode.com/api/auth/user" , {
        cache:"no-store" ,
        method:'POST', 
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${request.cookies.get("token")}`, 
        },
    })
    if(!res.ok){
        return NextResponse.redirect(new URL('/logout', request.url));
    }
}
 

export const config = {
    matcher: ['/test' , '/users/:path*']
}