import express from "express";
import bodyParser from "body-parser"
import RegistryUserController from "../controller/RegistryUserController.js";
import {Login,Logout} from "../controller/loginController.js";
import Profile from "../controller/perfilController.js";
import CONECTION from "../database/conection/conection.js"

const APP = express()

APP.use(bodyParser.json())
APP.use(express.json())

/*ROUTES REGISTRY*/
APP.post("/sign-up", RegistryUserController.Registry1)
APP.put("/activation_account", RegistryUserController.verifyCode)
APP.put("/resend_activation_code", RegistryUserController.resendCode)
APP.post("/add_interests", RegistryUserController.interests)
APP.put("/add_description", RegistryUserController.addDescription)

APP.get("/users", RegistryUserController.showAllUsers)

/*login route */
APP.post("/sign-in", Login)

/*logout route */
APP.get("/logout",Logout)

/*PROFILE ROUTE */
APP.get("/profile", Profile)





/*MORE ROUTES */
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


export default APP;