import express from 'express'
import bodyParser from "body-parser"
import cors from  "cors"  
import dotenv from "dotenv"
import suplierRoute from "./routes/suplier.route.js"
import userRoute from "./routes/user.route.js"
import barangRoute from "./controllers/barang_controller.js"

const app = express()

dotenv.config()
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

app.use("/suplier",suplierRoute)
app.use("/user", userRoute)
app.use("/barang", barangRoute)

app.listen(process.env.app_port,() => {
    console.log("server run on "+ process.env.app_port)
})  