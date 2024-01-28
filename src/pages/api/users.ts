import { retriveData } from "@/libs/firebase/firebase_service"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        const users = await retriveData("users")
        const data = users.map((user:any) => {
            delete user.password
            return user
        })
        res.status(200).json({
            status: true,
            statusCode: 200,
            message: "success",
            data
        })
    }
}