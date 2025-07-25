import React, { useState, useEffect } from 'react';
import './MenuForm.css';


const initialState = {
  nombre_platillo: '',
  precio: '',
  descripcion: '',
};

const MenuForm = ({ open, onClose, onSubmit, initialData }) => {
  const [form, setForm] = useState(initialState);

  useEffect(() => {
    if (initialData) {
      // Si viene un id, lo conservamos para actualizar
      setForm({
        id_platillo: initialData.id_platillo || '',
        nombre_platillo: initialData.nombre_platillo || '',
        precio: initialData.precio || '',
        descripcion: initialData.descripcion || '',
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
            Nombre Platillo:
            <input name="nombre_platillo" value={form.nombre_platillo} onChange={handleChange} required />
          </label>
          <label>
            Precio:
            <input name="precio" type="number" step="0.01" value={form.precio} onChange={handleChange} required />
          </label>
          <label>
            Descripción:
            <input name="descripcion" value={form.descripcion} onChange={handleChange} required />
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

export default MenuForm;
