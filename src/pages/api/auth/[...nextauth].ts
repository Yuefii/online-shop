import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import { signIn } from "@/libs/firebase/firebase_service"
import { compare } from "bcrypt"
import { NextAuthOptions } from "next-auth"

const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXT_AUTH_SECRET,
    providers: [
        CredentialsProvider({
            type: "credentials",
            name: "credentials",
            credentials: {
                email: {label: "Email", type: "email"},
                password: {label: "Password", type: "password"},
            },
            async authorize(credentials) {
                const {email, password} = credentials as {
                    email: string
                    password: string
                }
                const user: any = await signIn(email)
                if (user) {
                    const passwordConf = await compare(password, user.password)
                    if (passwordConf) {
                        return user
                    }
                    return null
                } else {
                    return null 
                }
            }
        })
    ],
    callbacks: {
        async jwt({token, account, profile, user}: any) {
            if (account?.provider === "credentials") {
                token.fullname = user.fullname
                token.email = user.email
                token.role = user.role
            }
            return token
        },

        async session({session, token}: any) {
            if ("fullname" in token) {
                session.user.fullname = token.fullname
            }
            if ("email" in token) {
                session.user.email = token.email
            }
            if ("role" in token) {
                session.user.role = token.role
            }
            return session
        }
    },
    pages: {
        signIn: "/auth/login"
    }
}

export default NextAuth(authOptions)