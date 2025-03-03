import CONECTION from "../database/conection/conection.js"
import { hash } from "../auth/authBcryptService.js";
import { sendActivationEmail } from "../auth/authEmailService.js";

class RegistryUser {

    showAllUsers(req, res) {
        const SQL = "SELECT * FROM users"
        CONECTION.query(SQL, (error, response) => {
            if (error) {
                res.status(500).json({ message: "erro" })
            } else {
                const users = response
                const sql = "SELECT * FROM INTERESTS"
                CONECTION.query(sql, (error, response) => {
                    if (error) {
                        res.status(500).json({ message: "erro" })
                    } else {
                        const interest = response
                        res.status(200).json({ users: users, interests: interest })
                    }
                })
            }
        })
    }

    async Registry1(req, res) {
        const { name, birth_date, email, gender, password } = req.body
        const hash_Password = await hash(password)
        const Code = Math.floor(100000 + Math.random() * 900000).toString();

        if (!name || !birth_date || !email || !gender || !password) {
            return res.status(400).json({ message: "Preencha todos os campos obrigatórios!" });
        }

        await CONECTION.query("SELECT * FROM users WHERE email = ?", [email], (error, response) => {
            if (error) {
                console.error(error)
            } else {
                if (response.length > 0) {
                    return res.status(501).json({ message: "E-mail já cadastrado!" });
                }
            }
        })

        const SQL = `INSERT INTO users (id, name, birth_date, email, gender, password, activationCode) VALUES (NULL, ?, ?, ?, ?, ?, ?)`;
        await CONECTION.query(SQL, [name, birth_date, email, gender, hash_Password, Code], async (error, response) => {
            if (error) {
                res.status(501).json({ message: "Usuario não cadastrado", response: response })
                console.error(error)
            } else {
                await sendActivationEmail(email, Code)
                res.status(201).json({ message: `usuario cadastrado com sucesso , verifique o codigo de ativação no seu email`, codigo: Code })
            }
        })
    }

    async verifyCode(req, res) {
        const { email, code } = req.body;

        if (!email || !code) {
            return res.status(400).json({ message: "Coloque o email e o código de ativação" });
        }

        const sql = `SELECT activationCode FROM users WHERE email = ?`;
        CONECTION.query(sql, [email], async (error, results) => {
            if (error) {
                return res.status(500).json({ message: "Erro ao buscar usuário" });
            }

            if (results.length === 0) {
                return res.status(404).json({ message: "Usuário não encontrado" });
            }

            const activationCode = await results[0].activationCode;

            if ((code === activationCode)) {
                const updateSql = `UPDATE users SET activated = 1, activationCode = NULL WHERE email = ?`;
                CONECTION.query(updateSql, [email], (updateError) => {
                    if (updateError) {
                        console.error(updateError);
                        return res.status(500).json({ message: "Erro ao ativar a conta" });
                    }

                    return res.status(200).json({ message: "Conta ativada com sucesso" });
                });
            } else {
                return res.status(400).json({ message: "Código de ativação inválido" });
            }
        });
    }

    async resendCode(req, res) {
        const { email } = req.body
        const code = Math.floor(100000 + Math.random() * 900000).toString();
        await sendActivationEmail(email, code)
        const sql = `UPDATE users SET activationCode = ? WHERE email = ? `;
        CONECTION.query(sql, [code, email], (error, response) => {
            if (error) {
                res.status(501).json({ message: "novo codigo não enviado" })
            } else {
                res.status(201).json({ message: "novo codigo enviado", code: code })
            }
        })
    }

    interests(req, res) {
        const { email, interests } = req.body
        const sql = `SELECT id FROM users WHERE email = ?`;
        CONECTION.query(sql, [email], async (error, results) => {
            if (error) {
                return res.status(500).json({ message: "Erro ao buscar usuário" });
            } else if (results.length === 0) {
                return res.status(404).json({ message: "Usuário não encontrado" });
            } else {
                const user_id = await results[0].id
                const interestSql = `INSERT INTO interests (id,user_id,interest) VALUES (NULL,?,?)`
                for (let i = 0; i < interests.length; i++) {
                    CONECTION.query(interestSql, [user_id, interests[i]], (error, response) => {
                        if (error) {
                            return res.status(500).json({ message: "interesses não cadastrados" })
                        }
                    })
                }
                res.status(201).json({ message: "Interesses Cadastrados" })
            }
        })
    }

    addDescription(req, res) {
        const { email, description } = req.body
        const sql = `UPDATE users SET description = ? WHERE email = ?`;
        CONECTION.query(sql, [description, email], async (error, results) => {
            if (error) {
                res.status(1).json({ message: "descrição não adicionada" });
            } else {
                res.status(201).json({ message: "Descrição adicionada com sucesso" })
            }
        })
    }

}

export default new RegistryUser()