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
        const { id, data } = req.body
        await updateData("users", id, data, (result: boolean) => {
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
    } else if (req.method === "DELETE") {
        const { users }: any = req.query
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
                    statusCode: 200,
                    message: "failed",
                })
            }
        })
    }
}