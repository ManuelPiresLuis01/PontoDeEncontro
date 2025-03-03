import mysql from "mysql"

const CONECTION = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bd_ponto_de_encontro"
})

CONECTION.connect((error) => {
    if (error) {
        console.error(error)
    }
});

export default CONECTION
