import ServiceCarro from "../service/carro.js"

class ControllerCarro {

    //Recebimento e a saida das info

   async Buscar (_, res) {
        try {
            const carros = await ServiceCarro.Buscar()
            res.send({ mensagem: carros})
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }

}

    Detalhe(req, res) {
        try {
            const id = req.params.id
           const carro = ServiceCarro.Detalhe(id)
 
            res.send({ mensagem: carro })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    Criar (req, res) {
        try {
    const { id, marca, ano } = req.body 

    ServiceCarro.Criar(id, marca, ano)

    } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    res.send({ mensagem: "Cadastrado com sucesso"})
}

    Alterar(req, res) {
        try {
            
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    Deletar(req, res) {
        try{
            const id = req.body.id

            ServiceCarro.Deletar(id)

            res.send({ mensagem: "Deletado" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

}

export default new ControllerCarro()