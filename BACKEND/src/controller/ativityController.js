import CONECTION from "../database/conection/conection.js"

class Ativity {
    saveAtivity(req, res) {
        const { title, description, begin_date, end_date, user_id } = req.body
        const sql = "INSERT INTO ativity (ID, TITLE, DESCRIPTION, BEGIN_DATE, END_DATE, USER_ID) values (NULL, ?, ?, ?, ?, ?)"

        CONECTION.query(sql, [title, description, begin_date, end_date, user_id], (error, response) => {
            if (error) {
                res.status(501).json({ message: "atividade não salva" })
            } else {
                res.status(201).json({ message: "atividade salva", idAtividade: response.insertId })
            }
        })
    }

    seeAll(req, res) {
        const { user_id } = req.body
        const sql = "SELECT TITLE, DESCRIPTION, BEGIN_DATE, END_DATE, USER_ID FROM ativity WHERE USER_ID = ? ORDER BY ID DESC"

        CONECTION.query(sql, [user_id], async (error, response) => {
            if (error) {
                res.status(501).json({ message: "erro no servidor" })
            } else if (await response.length === 0) {
                res.status(404).json({ message: "sem atividades salvas" })
            } else {
                res.status(202).json({ Ativities: response })
            }
        })
    }

    confirmAtivity(req, res) {
        const { id_activity, user_id } = req.body
        const sql = "INSERT INTO ativity_participants (ID_ATIVITY, USER_ID) VALUES (?, ?)"

        CONECTION.query(sql, [id_activity, user_id], async (error, response) => {
            if (error) {
                res.status(501).json({ message: "erro no servidor" })
            } else {
                res.status(201).json({ message: "atividade confirmada" })
            }
        })
    }

    seeAllParticipants(req, res) {
        const { id_activity } = req.body
        const sql = "SELECT ID_ATIVITY, USER_ID FROM ativity_participants WHERE ID_ATIVITY = ?"

        CONECTION.query(sql, [id_activity], async (error, response) => {
            if (error) {
                res.status(500).json({ message: "erro no servidor" })
            } else if (await response.length === 0) {
                res.status(404).json({ message: "ninguem confirmou ainda" })
            } else {
                res.status(200).json({ Confirmed: response })
            }
        })
    }
}

export default new Ativity()