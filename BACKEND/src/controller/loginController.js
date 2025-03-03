import { comparePassword } from "../auth/authBcryptService.js"
import CONECTION from "../database/conection/conection.js"

export default function Login(req, res) {
    const { email, password } = req.body
    const sql = "SELECT id,name ,email,passwordWHERE email =  ?"

    if (!email || !password) {
        res.status(404).json({ message: "digite email e senha" })
    }

    CONECTION.query(sql, [email], (error, response) => {
        if (error) {
            res.status(500).json({ message: "erro no servidor" })
        } else if (response[0].length == 0) {
            res.status(404).json({ message: "email ou password errada" })
        } else {
            const hash = response[0].password
            const status = comparePassword(password, hash)
            if (status) {
                res.json({ message: "Usuario Logado com sucesso", usuario: response[0].name })
            } else {
                res.status(404).json({ message: "email ou password errada" })
            }
        }
    })
}