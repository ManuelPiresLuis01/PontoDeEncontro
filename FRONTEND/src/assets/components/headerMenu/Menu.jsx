import { FaMessage, FaUser, FaUsers, FaBell, FaArrowLeft } from "react-icons/fa6"
import "./Menu.css"
import { Link } from "react-router-dom"

export function Menu() {
    return (
        <div className="menu">
            <nav>
                <ul>
                    <Link to={"/Users"}>
                        <li><FaUsers /></li>
                    </Link>
                    <Link to={"/notify"}>
                        <li><FaBell /></li>
                    </Link>
                    <Link to={"/message"}>
                        <li><FaMessage /></li>
                    </Link>
                    <Link to={"/"}>
                        <li><FaUser /></li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export function HeaderMessage(p) {
    return (
        <div className="menu menuMessage">
            <ul>
                <Link to={"/"}>
                    <li className="arrowMessage"><FaArrowLeft /></li>
                </Link>
                <div>
                    <div className="desc">
                        <div >
                            <p className="name">{p.name}</p>
                        </div>

                        <Link to={"/otherProfile"}>
                            <div className="photoMessage">
                                <img src={p.photo} />
                            </div>
                        </Link>

                    </div>
                </div>
            </ul>
        </div>
    )
}