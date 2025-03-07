import mysql from "mysql"
import dotenv from "dotenv"

dotenv.config()

const CONECTION = mysql.createConnection({
    host: process.env.HOSTNAME,
    port: process.env.DBPORT,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DBNAME
})

CONECTION.connect((error) => {
    if (error) {
        console.error(error)
    }
});

export default CONECTION
