import { instance_axios } from "../axios/axios_instance";

export const usersService = {
    getAllUsers: () => instance_axios.get("/api/users")
}