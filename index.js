import express from 'express'
import carros from './router/carro.js'
import database from './config/database.js'

const app = express()
app.use(express.json())

app.use("/api/v1/carro", carros)

database.db
    .sync({ force: true })
    .then((_) => {
        app.listen(3000, () => {
            console.log("Servidor rodando na porta 3000")
        })
    })
    .catch((e) => {
        console.log(e)
    })