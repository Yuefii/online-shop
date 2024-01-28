import { getToken } from "next-auth/jwt"
import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from "next/server"

const adminOnly = ["admin"]
const authPages = ["auth"]

export default function Authentication(
    middleware: NextMiddleware,
    requireAuth: string[] = [],
) {
    return async (req: NextRequest, next: NextFetchEvent) => {
        const pathname = req.nextUrl.pathname.split("/")[1]
        
        if (requireAuth.includes(pathname)) {
            const token = await getToken({
                req,
                secret: process.env.NEXT_AUTH_SECRET,
            })
            if (!token && !authPages.includes(pathname)) {
                const url = new URL("/auth/login", req.url)
                url.searchParams.set("callbackUrl", encodeURI(req.url))
                return NextResponse.redirect(url)
            }
            if (token) {
                if (authPages.includes(pathname)) {
                    return NextResponse.redirect(new URL("/", req.url))
                }
                if (adminOnly && token.role !== "admin" ) {
                    return NextResponse.redirect(new URL("/", req.url))
                }
            }
        }
        return middleware(req, next)
    }
}