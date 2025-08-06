
import axios from 'axios';
const API_URL = "http://localhost:3001/api/purchaseorders";

export const getPurchaseOrders = () => axios.get(API_URL);
export const getPurchaseOrder = (id) => axios.get(`${API_URL}/${id}`);
export const crearPurchaseOrder = (data) => axios.post(API_URL, data);
export const actualizarPurchaseOrder = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const eliminarPurchaseOrder = (id) => axios.delete(`${API_URL}/${id}`);
