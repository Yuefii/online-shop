import axios from "axios";

const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
}

export const instance_axios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers,
    timeout: 60 * 1000
})

instance_axios.interceptors.request.use(
    (response) => response,
    (error) => Promise.reject(error)
)

instance_axios.interceptors.response.use(
    (config) => config,
    (error) => Promise.reject(error)
)