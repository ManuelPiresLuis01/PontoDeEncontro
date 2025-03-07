import {Menu }from "../../../components/headerMenu/Menu"
import { Person } from "../../finishing/Finish"
import "./Notify.css"

export default function Notify() {
    return (
        <div className="login people notify">
            <Menu/>
            <h1>Notificações</h1>

            <div className="known">
                     <Person
                       name="Manuel Pires Luis"
                       about="Deu te um toque"
                       photo=""
                    />     
                    <Person
                       name="Manuel Pires Luis"
                       about="Tem uma nova atividade"
                       photo=""
                    />  
                    <Person
                       name="Manuel Pires Luis"
                       about="Deu te um toque"
                       photo=""
                    />  
                    <Person
                       name="Manuel Pires Luis"
                       about="Deu te um toque"
                       photo=""
                    />  
            </div>
        </div>
    )
}