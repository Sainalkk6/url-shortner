import { getAllUrl, postUrl, redirectUrl } from "../controller/url-shorten.controller" ;
import { Router } from "express";

const router =  Router();
// routes for url-shortner
router.post("/",postUrl)
router.get("/:url",redirectUrl as any)
router.get("/",getAllUrl as any)

export default router