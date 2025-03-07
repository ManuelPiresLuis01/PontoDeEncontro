import {Menu} from "../../../components/headerMenu/Menu"
import{useState,useEffect} from "react"
import { Person } from "../../finishing/Finish"
import api from "../../../../service/api"
import "./Users.css"

export default function Users() {
    const [user, setUsers] = useState([])

    useEffect(() => {
        const Users = async () => {
            try {
                const response = await api.get("/users")
                setUsers(response.data.users)
            } catch (error) {
                console.error(error)
            }
        }
        Users()
    }, [])
    return (
        <div className="login people notify">
            <Menu/>
            <h1>Conecta-te</h1>

            <div className="known">
                {user.map((user) => (
                   <div key={user.id}>
                     <Person
                        photo={user.profile_photo}
                        name={user.name}
                        about={user.description}
                    />
                    </div>
                ))}
            </div>
        </div>
    )
}