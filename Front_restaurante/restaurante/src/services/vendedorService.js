import axios from 'axios';

const API_URL = "http://localhost:3001/api/vendedores";

export const getVendedores = () => axios.get(API_URL);
export const getVendedor = (id) => axios.get(`${API_URL}/${id}`);
export const crearVendedor = (data) => axios.post(API_URL, data);
export const actualizarVendedor = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const eliminarVendedor = (id) => axios.delete(`${API_URL}/${id}`);
