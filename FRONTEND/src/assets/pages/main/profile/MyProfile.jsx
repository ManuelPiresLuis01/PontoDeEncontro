import img from "../../../../../public/images/1684975965255.jpg"
import "./Profile.css"
import { Link } from "react-router-dom"
import { FaPencil } from "react-icons/fa6"
import { FaArrowLeft } from "react-icons/fa"
import { useEffect, useState } from "react"
import Perfil from "../../../../service/perfil.js"

export default function MyProfile() {
    const [data, setData] = useState([])
    const token = localStorage.getItem("token")

    useEffect(() => {
        const profile = async () => {
            console.log(token)
            try {
                const response = await Perfil(token)
                setData(response)
            } catch (error) {
                console.log(error)
            }
        }
        profile()
    }, [token])

    return (
        <div className="login Profile">
            <div className="cover">
                <Link to="/Users">
                    <i>< FaArrowLeft /></i>
                </Link>
                <div className="userInformation">
                    <div className="profilePhoto">
                        <img src={img} />
                    </div>
                    <h1>{data.name}</h1>
                    <address>
                        <p>{data.description}</p>
                    </address>
                </div>
            </div>
            <div className="activities">
                <div className="login ativity">
                    <div className="ativities">
                        <i><FaPencil /></i>
                        <h1>Sem atividades registadas</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}