import axios from 'axios';

const API_URL = "http://localhost:3001/api/facturas";

export const getFacturas = () => axios.get(API_URL);

export const getFactura = (id) => axios.get(`${API_URL}/${id}`);

export const crearFactura = (data) => axios.post(API_URL, data);

export const actualizarFactura = (id, data) => axios.put(`${API_URL}/${id}`, data);

export const eliminarFactura = (id) => axios.delete(`${API_URL}/${id}`);