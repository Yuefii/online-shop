import { instance_axios } from "../axios/axios_instance";

export const usersService = {
    getAllUsers: () => instance_axios.get("/api/users"),
    updateUsers: (id: string, data: any, token: string) => instance_axios.patch(`/api/users/${id}`, 
    { data }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }),
    deleteUsers: (id: string, token: string) => instance_axios.delete(`/api/users/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}