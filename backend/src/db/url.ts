import { UrlType } from "types"
import connectedKnex from "./knex"

const createURL = (url:UrlType) => connectedKnex("urls").insert(url)
const getURLS = () => connectedKnex("urls").select("*")
const getSpecificURL = (url:string) => connectedKnex("urls").select("original_url").where("shorted_url",url)

export default { createURL, getURLS, getSpecificURL }