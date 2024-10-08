import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export function middleware(req: NextRequest){
    console.log(req.cookies.get('token'));
    
    const token = req.cookies.get('token')?.value;
    
    if(!token){
        return NextResponse.redirect(new URL('/signin',req.url))
    }
    // Token varsa devam et
    return NextResponse.next()
}

 // Middleware çalışacağı sayfalar
 export const config = {
    matcher: ['/'],
};