import "./Ativation.css"
import { FaMessage } from "react-icons/fa6";
import { BotaoSubmit } from "../../components/botao/Botao";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../service/api.js";


const Sending = () => {
    const navigate = useNavigate();

       useEffect(()=>{
        let time = setInterval(() => {
            navigate("/code")
        }, 5000)

        setTimeout(() => {
            clearInterval(time)
        }, 5005)
       },[])


    return (

        <div className="login splashAtivation">
            <i><FaMessage /></i>
            <p>Vamos enviar um codigo de ativação para o seu email, não compartilhe com ninguem, o codigo é pessoal e temporario, verifique no seu email</p>
        </div>
    )
}

function Code() {
    const email = localStorage.getItem("email")
    const [code, setCode] = useState("")
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")

    const resend = async () => {
        setMessage("")
        setCode("")
        try {
            const response = await api.put("/resend_activation_code", {email})
            const messages = await response.data.message
            setMessage(messages)
        } catch (error) {
            setMessage(error.AxiosError.response.data.message)
        } finally {
        }
    }

    const submit = async (e) => {
        e.preventDefault()
        setMessage("")
        setLoading(true)

        try {
            const response = await api.put("/activation_account", { email, code })
            setCode("")
            const messages = await response.data.message
            setMessage(messages)
            navigate("/my-desription")
        } catch (error) {
            setCode("")
            setMessage(error.AxiosError.response.data.message)
            setLoading(false)
        } finally {
            setCode("")
            setLoading(false)
        }
    }

    return (
        <div className="login splashAtivation">
            <form onSubmit={submit}>
                <h1>Digite o codigo</h1>
                <p>Foi enviado um codigo de 6 digitos, no seguinte email: <b><address>{email}</address></b>. Verifique o span caso não encontre</p>
                <br />

                <div className="input">
                    <input
                        onChange={(e) => { setCode(e.target.value) }}
                        type="text"
                        placeholder="xxx-xxx"
                        required
                    />
                </div>
                <span onClick={resend}>Reenviar...</span>
                {message && <p>{message}</p>}
                <BotaoSubmit
                    value={!loading ? "Enviar" : "Enviando..."}
                    disable={loading}
                />
            </form>
        </div>
    )
}

export { Sending, Code };