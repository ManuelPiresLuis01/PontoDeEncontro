import mysql from "mysql"
import dotenv from 'dotenv';

dotenv.config();

const CONECTION = mysql.createConnection({
    host: process.env.HOSTNAME,
    port: Number(process.env.DBPORT),
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DBNAME
})

CONECTION.connect((err) => {
  if (err) {
    console.error('Erro ao conectar:', err);
    return;
  }
  console.log('Conectado ao MySQL do InfinityFree!');
});

export default CONECTION
