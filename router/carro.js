import express from 'express'
import carros from '../repository/carro.js'

const router = express.Router()

router.get("/buscar", (req, res) => {
    res.send({ mensagem: carros})
})

router.get("/detalhe/:id", (req, res) => {
    
})

router.post("/criar", (req, res) => {
    const { id, marca, ano } = req.body 

    if (!id || !marca || !ano) {
        res.send({ mensagem: "Favor informar todos os dados"})
        return
    }
    carros.push({ id, marca, ano })
    res.send({ mensagem: "Cadastrado com sucesso"})
})

router.get("/alterar", (req, res) => {
    
})

router.get("/daleta", (req, res) => {
    
})

export default router