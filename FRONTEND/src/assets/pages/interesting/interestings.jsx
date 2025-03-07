import "./interestings.css"
import { BotaoSubmit } from "../../components/botao/Botao"
import { useState } from "react"
import{useNavigate} from "react-router-dom"
import api from "../../../service/api.js"

export default function Interesting() {
    const [interests, setInterest] = useState([])
    const email = localStorage.getItem("email")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const submit = async (e) => {
        e.preventDefault()
        setMessage("")
        setLoading(true)

        try {
            const response = await api.post("/add_interests", { email, interests })
            const messages = await response.data.message
            setMessage(messages)
            navigate("/meeting-information")
        } catch (error) {
            setMessage(error.AxiosError.response.data.message)
            setLoading(false)
        } finally {
            setLoading(false)
        }
        
    }
    
    return (
        <form className="login Interesting" onSubmit={submit}>
            <h1>Oque procuras?</h1>
            <div className="interests">
                <div onClick={() => {
                    setInterest("Networking")
                }}>
                    <Interest
                        value="Networking"
                    />
                </div>

                <div onClick={() => {
                    setInterest("Novo amor")
                }}>
                    <Interest
                        value="Novo amor"
                    />
                </div>

                <Interest
                    value="Memes"
                />
                <Interest
                    value="Amizade"
                />
                <Interest
                    value="Educação amorosa"
                />
                <Interest
                    value="Novo relacionamento"
                />
            </div>
            {message && <p>{message}</p>}
            <BotaoSubmit
               value={!loading ? "Enviar" : "Enviando..."}
               disable={loading}
            />
        </form>
    )
}




function Interest(p) {
    const [clicked, setClicked] = useState(false)
    return (
        <div onClick={() => { setClicked(!clicked) }} className={!clicked ? "interest" : "clickedInterest"}>
            {p.value}
        </div>
    )
}