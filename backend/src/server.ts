import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import router from "./route/url-shorten.route"

const app =  express()
const port = 3012

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors({origin:"http://localhost:3000"}))
app.use("/",router)

app.listen(port,()=> console.log(`server is running on port ${port}`))