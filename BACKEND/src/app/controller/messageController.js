import CONECTION from '../database/conection/conection.js';

class Message {
    async sendMessage(req, res) {
        const { emissor, receptor, content } = req.body

        if (!emissor || !receptor || !content) {
            return res.status(404).json({ message: "digite a suma mensagem" })
        }

        const sql = "INSERT INTO message (ID, EMISSOR_ID, RECEPTOR_ID, CONTENT) VALUES (NULL, ?,?,?)"

        CONECTION.query(sql, [emissor, receptor, content], (error, response) => {
            if (error) {
                res.status(501).json({ message: "Mensagem não enviada" })
            } else {
                res.status(201).json({ mensagem: "mensagem enviada" })
            }
        })
    }

    async listAllMessageById(req, res) {
        const { id } = req.body
        const sql = "SELECT * FROM message WHERE EMISSOR_ID = ? OR RECEPTOR_ID = ? ORDER BY ID DESC"

        if (!id)
            return res.status(404).json({ message: "emissor não encontrado" })

        CONECTION.query(sql, [id, id], async (error, response) => {
            if (error) {
                console.log(id)
                res.status(404).json({ message: "emissor não encontrado" })
            } else {
               res.status(200).json({message: response})
            }
        })
    }
}

export default new Message()