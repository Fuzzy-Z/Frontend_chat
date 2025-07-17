// src/api.js
import axios from 'axios'

const API_BASE_URL = 'http://26.13.12.86:3000'  // IP do backend na VPN

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
