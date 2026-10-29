import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api'
})

// Pegar o Token

export default api