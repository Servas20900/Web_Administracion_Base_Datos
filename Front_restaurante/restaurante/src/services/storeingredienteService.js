import axios from 'axios';

const API_URL = "http://localhost:3001/api/storeingredientes";

export const getStoreIngredientes = () => axios.get(API_URL);
export const getStoreIngrediente = (id) => axios.get(`${API_URL}/${id}`);
export const crearStoreIngrediente = (data) => axios.post(API_URL, data);
export const actualizarStoreIngrediente = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const eliminarStoreIngrediente = (id) => axios.delete(`${API_URL}/${id}`);
