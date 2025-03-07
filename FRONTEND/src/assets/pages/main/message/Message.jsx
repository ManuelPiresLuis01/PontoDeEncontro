import { HeaderMessage } from "../../../components/headerMenu/Menu"
import img from "../../../../../public/images/1684975965255.jpg"
import "./Message.css"

export default function Messages() {
    return (
        <form className="login messages">
            <HeaderMessage
                photo={img}
                name="Arieth Malembe"
            />
            <div className="message-field">
                <Receptor
                    value="muito bem, e tu?"
                />
                <Emissor
                    value="amanha vamos sair"
                />
                  <Receptor
                    value="muito bem, e tu?"
                />
                <Emissor
                    value="te amo"
                />
                <Emissor
                    value="amanha vamos sair"
                />
                  <Receptor
                    value="muito bem, e tu?"
                />
                
            </div>
            <div className="inputSendMsg">
                <textarea placeholder="Mensagem..."></textarea>
                <button type="submit">Enviar</button>
            </div>
        </form>
    )
}

function Emissor(p) {
    return (
        <div className="message emissor">
            <p> {p.value}</p>
        </div>
    )
}

function Receptor(p) {
    return (
        <div className="message receptor">
            <p> {p.value}</p>
        </div>
    )
}