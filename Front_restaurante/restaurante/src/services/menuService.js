import axios from 'axios';

const API_URL = "http://localhost:3001/api/menu";

export const getMenus = () => axios.get(API_URL);

export const getMenu = (id) => axios.get(`${API_URL}/${id}`);

export const crearMenu = (data) => axios.post(API_URL, data);

export const actualizarMenu = (id, data) => axios.put(`${API_URL}/${id}`, data);

export const eliminarMenu = (id) => axios.delete(`${API_URL}/${id}`);