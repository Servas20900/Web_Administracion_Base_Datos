import axios from 'axios';

const API_URL = "http://localhost:3001/api/detallepurchaseorders";

export const getDetallePurchaseOrders = () => axios.get(API_URL);

export const getDetallePurchaseOrder = (id) => axios.get(`${API_URL}/${id}`);

export const crearDetallePurchaseOrder = (data) => axios.post(API_URL, data);

export const actualizarDetallePurchaseOrder = (id, data) => axios.put(`${API_URL}/${id}`, data);

export const eliminarDetallePurchaseOrder = (id) => axios.delete(`${API_URL}/${id}`);