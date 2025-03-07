import api from "./api.js"

export default async function Login(email, password) {
    try {
        const response = await api.post("/sign-in", { email, password })
        const token = response.data.token
        localStorage.setItem("token", token)
        return response.data
    } catch (error) {
        return error
    }
}