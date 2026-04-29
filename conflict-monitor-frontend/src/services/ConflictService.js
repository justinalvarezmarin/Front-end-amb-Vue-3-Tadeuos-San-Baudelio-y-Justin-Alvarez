import axios from 'axios'

// Esta línea es la magia: usa la variable de Vercel en la nube 
// y localhost solo cuando estás programando en tu PC.
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api/v1';

const apiClient = axios.create({
  baseURL: API_URL, 
  headers: { 'Content-Type': 'application/json' }
})

export default {
  async getAll() {
    const response = await apiClient.get('/conflicts')
    return response.data
  }
}