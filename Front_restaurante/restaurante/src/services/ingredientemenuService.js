import axios from 'axios';

const API_URL = "http://localhost:3001/api/ingredientemenus";

export const getIngredienteMenus = () => axios.get(API_URL);
export const getIngredienteMenu = (id) => axios.get(`${API_URL}/${id}`);
export const crearIngredienteMenu = (data) => axios.post(API_URL, data);
export const actualizarIngredienteMenu = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const eliminarIngredienteMenu = (id) => axios.delete(`${API_URL}/${id}`);
