import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import CONECTION from '../database/conection/conection.js';

const SECRET_KEY = 'teste'; 


export function Login(req, res) {
    const { email, password } = req.body;
    const sql = "SELECT id, name, email, password FROM users WHERE email = ?";

    if (!email || !password) {
        return res.status(400).json({ message: "Digite email e senha" });
    }

    CONECTION.query(sql, [email], async (error, results) => {
        if (error) {
            return res.status(500).json({ message: "Erro no servidor" });
        }

        if (results.length === 0) {
            return res.status(401).json({ message: "Email ou senha incorretos" });
        }

        const user = await results[0];
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Email ou senha incorretos" });
        }

        const token = jwt.sign({ userId: user.id, name: user.name, email: user.email }, SECRET_KEY, { expiresIn: '24h' });

        res.status(200).json({ message: "Usuário logado com sucesso", token:token });
    });
}


export function Logout(req, res) {
    res.json({ message: "Usuário deslogado com sucesso" });
}

