import { UrlType } from "types"
import connectedKnex from "./knex"

const createURL = (url: UrlType) => connectedKnex("urls").insert(url)
const getURLS = () => connectedKnex("urls").select("*")
const getSpecificURL = (url: string) => connectedKnex("urls").select("original_url").where("shorted_url", url)
const checkExistence = (url: string) => connectedKnex("urls").select("shorted_url").where("original_url", url)

export default { createURL, getURLS, getSpecificURL, checkExistence }