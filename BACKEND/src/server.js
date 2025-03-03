import APP from "./app/app.js";
import dotenv from "dotenv"

dotenv.config()

const PORT = process.env.API_PORT

APP.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})
