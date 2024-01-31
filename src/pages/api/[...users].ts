import jwt from "jsonwebtoken"
import { deleteData, retriveData, updateData } from "@/libs/firebase/firebase_service"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        const users = await retriveData("users")
        const data = users.map((user: any) => {
            delete user.password
            return user
        })
        res.status(200).json({
            status: true,
            statusCode: 200,
            message: "success",
            data
        })
    } else if (req.method === "PATCH") {
        const { users }: any = req.query
        const { data } = req.body
        const token: any = req.headers.authorization?.split(" ")[1]

        jwt.verify(token, process.env.NEXT_AUTH_SECRET || "", async (err: any, decoded: any) => {
            if (decoded && decoded.role === "admin") {
                await updateData("users", users[1], data, (result: boolean) => {
                    if (result) {
                        res.status(200).json({
                            status: true,
                            statusCode: 200,
                            message: "success",
                        })
                    } else {
                        res.status(400).json({
                            status: false,
                            statusCode: 200,
                            message: "failed",
                        })
                    }
                })
            } else {
                res.status(403).json({
                    status: false,
                    statusCode: 403,
                    message: "access denied",
                })
            }
        })

    } else if (req.method === "DELETE") {
        const { users }: any = req.query
        const token: any = req.headers.authorization?.split(" ")[1]
        jwt.verify(token, process.env.NEXT_AUTH_SECRET || "", async (err: any, decoded: any) => {
            if (decoded && decoded.role === "admin") {
                await deleteData("users", users[1], (result: boolean) => {
                    if (result) {
                        res.status(200).json({
                            status: true,
                            statusCode: 200,
                            message: "success",
                        })
                    } else {
                        res.status(400).json({
                            status: false,
                            statusCode: 400,
                            message: "failed",
                        })
                    }
                })
            } else {
                res.status(403).json({
                    status: false,
                    statusCode: 403,
                    message: "access denied",
                })
            }
        })
    }
}