import { NextRequest, NextResponse } from "next/server";


export function middleware(request:NextRequest){
   const isValid = request.cookies.get("token")?.value
   if(isValid){
      return NextResponse.next()
   }
   const url = new URL(request.url)
   url.pathname = "login"
   return Response.redirect(url.toString())
}
export const config = {
   matcher:['/dashboard/:path*']
}