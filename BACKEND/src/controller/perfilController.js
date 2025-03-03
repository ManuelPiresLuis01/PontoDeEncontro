import jwt from "jsonwebtoken"
import CONECTION from "../database/conection/conection.js";
import dotenv from "dotenv"

dotenv.config()

const SECRET_KEY = process.env.SECRET_KEY; 

export default async function Profile(req, res) {
    const { token } = req.body;
    if (!token) {
        return res.status(401).json({ message: "Token não fornecido" });
    }

    try {
        const decoded = await jwt.verify(token, SECRET_KEY);
        const id = decoded.userId
        const sql = "SELECT * FROM users where id = ?"
        CONECTION.query(sql, [id], (error, response) => {
            if (error) {
                return error
            } else {
                const datas = response[0]
                res.status(200).json(datas);
            }
        }
        )

    } catch (error) {
        res.status(401).json({ message: "Token inválido" });
    }
}
