import api from './api'

// buscar

// buscarUs

// criar

// laterar

export const loginUsuario = async (email, senha) => {
    const body = { email, senha }
    const response = await api.post('/v1/usuario/login', body, {
        headers: {'Content-Type': 'application/json'}
    })

    return response.data
}