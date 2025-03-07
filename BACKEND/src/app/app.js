import express from "express";
import bodyParser from "body-parser"
import Cors from "cors"
import RegistryUserController from "./controller/RegistryUserController.js";
import {Login,Logout} from "./controller/loginController.js";
import Profile from "./controller/perfilController.js";
import Message from "./controller/messageController.js";
import Ativity from "./controller/ativityController.js";
import CONECTION from "./database/conection/conection.js"

const APP = express()

APP.use(bodyParser.json())
APP.use(express.json())

APP.use(Cors())

/*ROUTES REGISTRY*/
APP.post("/sign-up", RegistryUserController.Registry1)
APP.put("/activation_account", RegistryUserController.verifyCode)
APP.put("/resend_activation_code", RegistryUserController.resendCode)
APP.post("/add_interests", RegistryUserController.interests)
APP.put("/add_description", RegistryUserController.addDescription)

/*login route */
APP.post("/sign-in", Login)

/*logout route */
APP.get("/logout",Logout)

/*PROFILE ROUTE */
APP.get("/profile", Profile)

/*MESSAGE */
APP.post("/sendMsg",Message.sendMessage)
APP.get("/seeMsg",Message.listAllMessageById)

/*ATIVITY ROUTES */
APP.post("/ativity",Ativity.saveAtivity)
APP.post("/confirm",Ativity.confirmAtivity)
APP.get("/seeAtivity",Ativity.seeAll)
APP.get("/seeParticipants",Ativity.seeAllParticipants)


/*MORE ROUTES */
APP.get("/users", RegistryUserController.showAllUsers)

APP.delete("/del", (req, res) => {
    const sql = "delete from users"
    CONECTION.query(sql, (error, response) => {
        if (error) {
            console.error(error)
        } else {
            res.json(response)
        }
    })
    res.json({ message: "deleted" })
})

export default APP
