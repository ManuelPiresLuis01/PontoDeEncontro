import axios from "axios"

const api = axios.create({
    baseURL: "https://pontodeencontro-backend.onrender.com",
})

export default api
