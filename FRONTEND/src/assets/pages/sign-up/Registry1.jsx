import "./Registry.css"
import { BotaoSubmit } from "../../components/botao/Botao"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import api from "../../../service/api.js"

export function SignUp() {
    const [see, setSee] = useState(false)
    const [loading, setLoading] = useState(false)
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [birth_date, setBirth_date] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [gender, setGender] = useState("male")
    const navigate = useNavigate()
    const submit = async (e) => {
        e.preventDefault()
        setMessage("")
        setLoading(true)
        try {
            const response = await api.post("/sign-up",{name, birth_date, email, gender, password})
            const messages = await response.data.message
            setMessage(messages)
            localStorage.setItem("email", email)
            localStorage.setItem("password", password)
            navigate("/sending")
        } catch (error) {
            setMessage(error.AxiosError.response.data.message)
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="login registry1">
            <h1>CADASTRE-SE</h1>
            <form onSubmit={submit}>

                <label>Nome Completo</label>
                <div className="input">
                    <input
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                        type="text"
                        placeholder="Seu nome"
                        required
                    />
                </div>

                <label>Data de Nascimento</label>
                <div className="input">
                    <input
                        value={birth_date}
                        onChange={(e) => { setBirth_date(e.target.value) }}
                        type="date"
                        required
                    />
                </div>

                <label>Seu email</label>
                <div className="input">
                    <input
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        type="email"
                        placeholder="seu email"
                        required
                    />
                </div>

                <label>Seu Genero</label>
                <div className="input">
                    <select
                        value={gender}
                        onChange={(e) => { setGender(e.target.value) }}
                    >
                        <option value="male">Masculino</option>
                        <option value="female">Femenino</option>
                        <option value="other">Outro</option>
                    </select>
                </div>

                <label>Sua password</label>
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
                <div className="btnSignup">
                    {message && <p>{message}</p>}
                    <BotaoSubmit
                        value={!loading ? "Cadastrar" : "Cadastrando"}
                        disable={loading}
                    />
                </div>
                <Link to={"/sign-in"}>Ja tem um conta?</Link>
            </form>
        </div>
    )
}
