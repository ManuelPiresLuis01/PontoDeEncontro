import "./Login.css"
import { FaHeart, FaRegEye, FaRegEyeSlash, FaRegCircle, FaRegCheckCircle } from "react-icons/fa"
import { useState } from "react"
import { BotaoSubmit } from "../../components/botao/Botao.jsx"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import Login from "../../../service/login.js"

export default function SignIn() {
    const [see, setSee] = useState(false)
    const [remember, setRemember] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const submit = async (e) => {
        e.preventDefault()
        setMessage("")
        setLoading(true)
        try {
            const response = await Login(email, password)
            setMessage(response.message)
           navigate("/")
        } catch (error) {
            setLoading(false)
            setMessage("erro")
            console.error(error)
        } finally {
            setMessage("")
            setLoading(false)
        }
    }

    return (
        <div className="login">
            <div className="title">
                <h1>Bem vindo!</h1>
                <i><FaHeart /></i>
            </div>
            <form onSubmit={submit}>
                <div className="input">
                    <input
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        type="email"
                        placeholder="Digite o seu email"
                        required
                    />
                </div>
                <div className="input">
                    <input
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        type={!see ? "password" : "text"}
                        placeholder="*******************"
                        required
                    />
                    <i onClick={() => { setSee(!see) }}>{!see ? < FaRegEye /> : <FaRegEyeSlash />}</i>
                </div>
                <div className="forgot">
                    <div><i onClick={() => { setRemember(!remember) }}>{!remember ? <FaRegCircle /> : <FaRegCheckCircle />}</i>Lembrar palavra passe</div>
                    <Link to="/forgot">
                        <div>Esqueci a senha</div>
                    </Link>
                </div>
                {message && <p style={{ color: "red" }}>{message}</p>}
                <BotaoSubmit
                    value={!loading ? "Entrar" : "Entrando"}
                    disable={loading}
                />
            </form>
            <Link to="/sign-up">
                <p>Não tem uma conta?</p>
            </Link>
        </div>
    )
}