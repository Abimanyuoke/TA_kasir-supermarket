import express from 'express'
import bodyParser from "body-parser"
import cors from  "cors"  
import dotenv from "dotenv"
import kasirRoute from "./routes/user.route.js"

const app = express()

dotenv.config()
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

app.use("/kasir", kasirRoute)

app.listen(process.env.app_port,() => {
    console.log("server run on "+ process.env.app_port)
})  