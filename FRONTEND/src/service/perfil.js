import api from "./api.js"

export default async function Perfil(token) {
    try {
        return await api.get(`/profile`,{token})
    } catch (error) {
        return error
    }
}