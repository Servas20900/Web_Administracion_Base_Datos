import axios from 'axios';

const API_URL = "http://localhost:3001/api/clientes";

export const getClientes = () => axios.get(API_URL);

export const getCliente = (id) => axios.get(`${API_URL}/${id}`);

export const crearCliente = (data) => axios.post(API_URL, data);

export const actualizarCliente = (id, data) => axios.put(`${API_URL}/${id}`, data);

export const eliminarCliente = (id) => axios.delete(`${API_URL}/${id}`);