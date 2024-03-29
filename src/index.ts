import express from "express"
import swaggerUi from "swagger-ui-express"

import { router } from "./routes"
import swaggerFile from "./swagger.json"

import "./database"

const app = express()
const host = 3333

app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({ extended: true }))

app.use(router)

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.listen(host, () => {
    console.log(`Executando o servidor na porta: ${host}`)
})