import axios from 'axios'

// Pon AQUÍ tu URL real de Railway (la que empieza por https)
const RAILWAY_URL = 'https://tu-proyecto-backend.up.railway.app/api/v1';

const apiClient = axios.create({
  // Si la variable de Vercel falla, usará la de Railway que acabamos de escribir
  baseURL: import.meta.env.VITE_API_URL || RAILWAY_URL,
  headers: { 'Content-Type': 'application/json' }
})

export default {
  async getAll() {
    const response = await apiClient.get('/conflicts')
    return response.data
  }
}