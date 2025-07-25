import React, { useState, useEffect } from 'react';
import '../Menu/MenuForm.css';


const initialState = {
  nombre: '',
  primer_apellido: '',
  segundo_apellido: '',
  puesto: '',
  salario: '',
  telefono: '',
  email: ''
};

const EmpleadoForm = ({ open, onClose, onSubmit, initialData }) => {
  const [form, setForm] = useState(initialState);

  useEffect(() => {
    if (initialData) {
      setForm({
        id_empleado: initialData.id_empleado || '',
        nombre: initialData.nombre || '',
        primer_apellido: initialData.primer_apellido || '',
        segundo_apellido: initialData.segundo_apellido || '',
        puesto: initialData.puesto.id_puesto || initialData.puesto || '',
        salario: initialData.salario || '',
        telefono: initialData.telefono || '',
        email: initialData.email || ''
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
        <h3>{initialData ? 'Actualizar Platillo' : 'Agregar Platillo'}</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre :
            <input name="nombre" value={form.nombre} onChange={handleChange} required />
          </label>
          <label>
            Primer Apellido:
            <input name="primer_apellido" value={form.primer_apellido} onChange={handleChange} required />
          </label>
          <label>
            Segundo Apellido:
            <input name="segundo_apellido" value={form.segundo_apellido} onChange={handleChange} required />
          </label>
          <label>
            Puesto:
            <input name="puesto" value={form.puesto} onChange={handleChange} required />
          </label>
          <label>
            salario:
            <input name="salario" value={form.salario} onChange={handleChange} required />
          </label>
          <label>
            telefono:
            <input name="telefono" value={form.telefono} onChange={handleChange} required />
          </label>
          <label>
            email:
            <input name="email" value={form.email} onChange={handleChange} required />
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

export default EmpleadoForm;
