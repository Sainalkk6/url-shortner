import express from "express"
import {getAllUrl,postUrl,redirectUrl} from "../controller/url-shorten.controller"

const router = express.Router()

router.post("/",postUrl)
router.get("/:url",redirectUrl as any)
router.get("/",getAllUrl as any)

export default router


