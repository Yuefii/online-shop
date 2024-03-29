import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import jwt from "jsonwebtoken"
import { signIn, signInWithGoogle } from "@/libs/services/firebase_auth"
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
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const { email, password } = credentials as {
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
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_OAUTH_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET || "",
        })
    ],
    callbacks: {
        async jwt({ token, account, profile, user }: any) {
            if (account?.provider === "credentials") {
                token.fullname = user.fullname
                token.email = user.email
                token.role = user.role
            }

            if (account?.provider === "google") {
                const data = {
                    fullname: user.name,
                    email: user.email,
                    type: "google",
                }

                await signInWithGoogle(data, (data: any) => {
                    token.fullname = user.fullname
                    token.email = user.email
                    token.role = user.role
                })
            }
            return token
        },

        async session({ session, token }: any) {
            if ("fullname" in token) {
                session.user.fullname = token.fullname
            }
            if ("email" in token) {
                session.user.email = token.email
            }
            if ("role" in token) {
                session.user.role = token.role
            }

            const accessToken = jwt.sign(token, process.env.NEXT_AUTH_SECRET || "", {
                algorithm: "HS256"
            })

            session.accessToken = accessToken

            return session
        }
    },
    pages: {
        signIn: "/auth/login"
    }
}

export default NextAuth(authOptions)