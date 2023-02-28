import dotenv from "dotenv"
import {resolve} from "path"

dotenv.config({
	path: resolve(process.cwd(), ".env")
})

export const [ PORT, PG_USER, PG_PORT, PG_PASSWORD, PG_HOST, PG_DATABASE, JWT_SECRET ] = process.env

Object.keys({ PORT, PG_USER, PG_PORT, PG_PASSWORD, PG_HOST, PG_DATABASE, JWT_SECRET }).forEach(key => {
	if(!process.env[key]) throw new Error(`MISSING ${key} value!.`)
})