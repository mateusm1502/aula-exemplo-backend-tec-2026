import express from 'express'

const router = express.Router()

router.get("/salario", (req, res) => {
    const {valor,hora} = req.query
    const resultado = valor*hora
    res.send(200).send({ message: resultado })
})

router.get("/")


export default router