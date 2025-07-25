import axios from 'axios';

const API_URL = "http://localhost:3001/api/empleados";

export const getEmpleados = () => axios.get(API_URL);

export const getEmpleado = (id) => axios.get(`${API_URL}/${id}`);

export const crearEmpleado = (data) => axios.post(API_URL, data);

export const actualizarEmpleado = (id, data) => axios.put(`${API_URL}/${id}`, data);

export const eliminarEmpleado = (id) => axios.delete(`${API_URL}/${id}`);