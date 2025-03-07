import { FaHeart } from "react-icons/fa"
import "./Finish.css"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import Login from "../../../service/login.js"

export function Finish() {
    const navigate = useNavigate()
    const email = localStorage.getItem("email")
    const password = localStorage.getItem("password")

    useEffect(() => {
        const login = async () => {
            try {
                await Login(email, password)
                navigate("/users")
                localStorage.removeItem("email")
                localStorage.removeItem("password")
            } catch (error) {
                console.error(error)
               navigate("/sign-in")
            } 
        }
        login()
    }, [])

    return (
        <div className="login finish">
            <h1>Reunindo todas <br /> informações para si ...</h1>
            <i><FaHeart /></i>
        </div>
    )
}

export function Person(p) {
    return (
        <div className="person">
            <div className="photo">
                <img src={p.photo} />
            </div>
            <div className="description">
                <p className="name">{p.name}</p>
                <p className="about">{p.about}</p>
            </div>
            <i></i>
        </div>
    )
}

