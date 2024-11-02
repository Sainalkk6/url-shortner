import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import sequelize from "./sequelize/models/index"
import router from "./routes/url-shortner.route"


const app =  express()
const port = 3011
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors({origin:"http://localhost:3000"}))
app.use(router)

const connect = async()=>{
    sequelize.authenticate()
    sequelize.sync()
    app.listen(port,()=> console.log(`server is running on port ${port}`))
}

connect()


