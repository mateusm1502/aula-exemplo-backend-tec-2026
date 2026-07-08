import express from 'express'
 
// server ou app
const app = express()

// somar 
app.get("/api/v1/somar", ( req, res) => {
    const { num1, num2 } = req.query
    const resultado = Number(num1) + Number(num2)
    res.send({ message: resultado })
})

// subtrair
app.get("/api/v1/subtrair", ( req, res ) => {
    const { num1, num2 } = req.query
    const resultado = Number(num1) - Number(num2)
    res.send({ message: resultado })
})

// mult
app.get("/api/v1/mult", ( req, res ) => {
    const { num1, num2 } = req.query
    const resultado = Number(num1) * Number(num2)
    res.send({ message: resultado })
} )

// div 
app.get("/api/v1/div", ( req, res ) => {
    const { num1, num2 } = req.query
    const resultado = Number(num1) / Number(num2)
    res.send({ message: resultado })
})

app.listen(3000,() => {
    console.log("Servidor ouvindo na porta 3000")
})
 
 