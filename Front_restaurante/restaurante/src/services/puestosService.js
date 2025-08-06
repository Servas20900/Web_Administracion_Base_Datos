
import axios from 'axios';
const API_URL = "http://localhost:3001/api/puestos";

export const getPuestos = () => axios.get(API_URL);
export const getPuesto = (id) => axios.get(`${API_URL}/${id}`);
export const crearPuesto = (data) => axios.post(API_URL, data);
export const actualizarPuesto = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const eliminarPuesto = (id) => axios.delete(`${API_URL}/${id}`);
