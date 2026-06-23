import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"})) // parse JSON body up to 16KB
app.use(express.urlencoded({extended: true,limit: "16kb"})) // parse URL-encoded form data up to 16KB
app.use(express.static("public")) // serve static files from public folder
app.use(cookieParser()) // parse cookies from requests


export {app}