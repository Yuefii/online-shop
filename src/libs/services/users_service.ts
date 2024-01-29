import { instance_axios } from "../axios/axios_instance";

export const usersService = {
    getAllUsers: () => instance_axios.get("/api/users"),
    updateUsers: (id: string, data: any) => instance_axios.patch("/api/users", { id, data }),
    deleteUsers: (id: string) => instance_axios.delete(`/api/users/${id}`)
}