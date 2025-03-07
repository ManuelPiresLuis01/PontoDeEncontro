import img from "../../../../../public/images/1684975965255.jpg"
import { Link } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa"

export default function OtherProfile() {
    return (
        <div className="login Profile">
            <div className="cover">
                <Link to="/">
                    <i>< FaArrowLeft /></i>
                </Link>
                <div className="userInformation">
                    <div className="profilePhoto">
                        <img src={img} />
                    </div>
                    <h1>Arieth Malembe</h1>
                    <address>
                        <p>Ninja Amorosa</p>
                    </address>
                </div>
            </div>
            <div className="activities">

            </div>
        </div>
    )
}