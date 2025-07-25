import axios from 'axios';

const API_URL = "http://localhost:3001/api/detallefacturas";

export const getDetalleFacturas = () => axios.get(API_URL);
export const getDetalleFactura = (id) => axios.get(`${API_URL}/${id}`);
export const crearDetalleFactura = (data) => axios.post(API_URL, data);
export const actualizarDetalleFactura = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const eliminarDetalleFactura = (id) => axios.delete(`${API_URL}/${id}`);
