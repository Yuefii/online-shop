import bcrypt from "bcrypt"
import { addData, retriveDataByField } from "../firebase/firebase_service"

export async function signUp(userData: {
    fullname: string
    email: string
    password: string
    role?: string
    created_at: Date
    updated_at: Date
}, callback: Function) {
    const data = await retriveDataByField("users", "email", userData.email)

    if (data.length > 0) {
        callback(false)
    } else {
        if (!userData.role) {
            userData.role = "user"
        }
        userData.password = await bcrypt.hash(userData.password, 12)
        userData.created_at = new Date()
        userData.updated_at = new Date()
        addData("users", userData, () => {
            callback(true)
        })
    }
}

export async function signIn(email: string) {
    const data = await retriveDataByField("users", "email", email)

    if (data) {
        return data[0]
    } else {
        return null
    }
}

export async function signInWithGoogle(data: { email: string, role?: string, created_at?: Date, updated_at?: Date }, callback: Function) {
    const user = await retriveDataByField("users", "email", data.email)

    if (user.length > 0) {
        callback(user[0])
    } else {
        data.role = "user"
        data.created_at = new Date()
        data.updated_at = new Date()
        addData("users", data, () => {
            callback(data)
        })
    }
}