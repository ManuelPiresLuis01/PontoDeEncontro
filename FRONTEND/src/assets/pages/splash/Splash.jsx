import "./Splash.css"
import { FaHeart } from "react-icons/fa"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Splash() {
    const navigate = useNavigate()

    useEffect(() => {
        const time = setInterval(() => {
            navigate("/sign-in")
        }, 5000)

        setTimeout(() => {
            clearInterval(time)
        }, 5005);
    }, [])
    
    return (
        <div className="splash_welcome">
            <i><FaHeart /></i>
        </div>
    )
}
