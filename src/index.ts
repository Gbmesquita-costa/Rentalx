import express from "express"
import { router } from "./routes"

const app = express()
const host = 3333

app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({ extended: true }))

app.use(router)

app.listen(host, () => {
    console.log(`Executando o servidor na porta: ${host}`)
})