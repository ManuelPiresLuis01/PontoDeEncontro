import "./Profile.css"
import { BotaoSubmit } from "../../components/botao/Botao"
import { FaUser } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../service/api.js";

function MyPhoto() {
    const [description, setDescription] = useState("")
    const email = localStorage.getItem("email")
    const [photo, setPhoto] = useState("")
    const [havePhoto, setHavePhoto] = useState(false)
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if (photo != "") {
            setHavePhoto(!havePhoto)
        }
    }, [photo])

    const submit = async (e) => {
        e.preventDefault()
        setMessage("")
        setLoading(true)

        try {
            const response = await api.put("/add_description", { email, description })
            setDescription("")
            const messages = await response.data.message
            setMessage(messages)
            navigate("/interesting") 
        } catch (error) {
            setDescription("")
            setMessage(error.AxiosError.response.data.message)
            setLoading(false)
        } finally {
            setDescription("")
            setLoading(false)
        }
        
    }

    return (
        <form className="login my-photo" onSubmit={submit}>
            <div className="photo">
                {
                    havePhoto ? <img src={photo} /> : <FaUser />
                }
            </div>
            <input type="file" style={{ display: "none" }} value={photo} onChange={(e) => { setPhoto(e.target.value) }} />
            <div className="descrip">
                <label>Sobre você</label> <br />
                <textarea placeholder="A procura de novas conexões..." value={description} maxLength={20} onChange={(e) => { setDescription(e.target.value) }} required></textarea>
                <p>{description.length}/20</p>
            </div>
            {message && <p>{message}</p>}
            <BotaoSubmit
                 value={!loading ? "Enviar" : "Enviando..."}
                 disable={loading}
            />
        </form>
    )
}

export { MyPhoto }