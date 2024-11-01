import { Response, Request } from "express"
import {z} from "zod"
import urlService from "../services/url-shorten.services";

const postUrl = async (req: Request, res: Response) => {

   try{
    const urlSchema = z.string().url()
    const originalUrl = urlSchema.parse(req.body.original_url)
    const shortUrl = await urlService.createShortUrl(originalUrl);
    res.status(201).json(shortUrl);
    return
   } catch(err){
    res.json("Please provide a valid url")
    return
   }
    
};

const redirectUrl = async (req: Request, res: Response) => {
    const originalUrl = await urlService.getOriginalUrl(req.params.url);
    if (originalUrl) {
        return res.redirect(originalUrl);
    }
    return res.status(404).json({ error: "URL not found" });
};

const getAllUrl = async (req: Request, res: Response) => {
    console.log(456)
    const urls = await urlService.getAllUrls();
    return res.status(200).json(urls);
};

export  { postUrl, redirectUrl, getAllUrl };
