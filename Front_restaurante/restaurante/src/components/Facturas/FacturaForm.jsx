import React, { useState, useEffect } from 'react';
import { getClientes } from '../../services/clienteService';
import { getEmpleados } from '../../services/empleadosService';
import '../Menu/MenuForm.css';

const initialState = {
  cliente: '',
  empleado: '',
  fecha: '',
  estado: '',
};



const FacturaForm = ({ open, onClose, onSubmit, initialData }) => {
  const [form, setForm] = useState(initialState);
  const [clientes, setClientes] = useState([]);
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    getClientes().then(res => setClientes(res.data));
    getEmpleados().then(res => setEmpleados(res.data));
  }, []);

  useEffect(() => {
    if (initialData) {
      setForm({
        id_factura: initialData.id_factura || '',
        cliente: initialData.cliente?.id_cliente || initialData.cliente || '',
        empleado: initialData.empleado?.id_empleado || initialData.empleado || '',
        fecha: initialData.fecha || '',
        estado: initialData.estado || '',
      });
    } else {
      setForm(initialState);
    }
  }, [initialData, open]);

  if (!open) return null;

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h3>{initialData ? 'Actualizar Factura' : 'Agregar Factura'}</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Cliente:
            <select name="cliente" value={form.cliente} onChange={handleChange} required>
              <option value="">Seleccione un cliente</option>
              {clientes.map(c => (
                <option key={c.id_cliente} value={c.id_cliente}>{c.nombre} {c.primer_apellido} {c.segundo_apellido}</option>
              ))}
            </select>
          </label>
          <label>
            Empleado:
            <select name="empleado" value={form.empleado} onChange={handleChange} required>
              <option value="">Seleccione un empleado</option>
              {empleados.map(e => (
                <option key={e.id_empleado} value={e.id_empleado}>{e.nombre} {e.primer_apellido} {e.segundo_apellido}</option>
              ))}
            </select>
          </label>
          <label>
            Fecha:
            <input name="fecha" value={form.fecha} onChange={handleChange} required />
          </label>
          <label>
            Estado:
            <input name="estado" value={form.estado} onChange={handleChange} required />
          </label>
         
          <div className="modal-actions">
            <button type="submit" className="action-btn add">{initialData ? 'Actualizar' : 'Agregar'}</button>
            <button type="button" className="action-btn update" onClick={onClose}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FacturaForm;
