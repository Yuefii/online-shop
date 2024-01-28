import { instance_axios } from "../axios/axios_instance";

export const authService = {
    registerAccount: (data: any) => instance_axios.post("/api/auth/register", data)
}