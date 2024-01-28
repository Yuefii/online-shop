
import { NextResponse } from "next/server"
import Authentication from "./middlewares/authentication"

export function Middleware() {
    const res = NextResponse.next()
    return res
}

export default Authentication(Middleware, ["admin", "auth"])