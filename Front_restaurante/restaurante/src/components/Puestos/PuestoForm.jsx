import React, { useState, useEffect } from 'react';

const PuestoForm = ({ open, onClose, onSubmit, initialData }) => {
    const [form, setForm] = useState({
        nombre_puesto: '',
        descripcion: ''
    });

    useEffect(() => {
        if (initialData) {
            setForm({
                nombre_puesto: initialData.nombre_puesto || '',
                descripcion: initialData.descripcion || ''
            });
        } else {
            setForm({
                nombre_puesto: '',
                descripcion: ''
            });
        }
    }, [initialData]);

    const handleChange = e => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(form);
    };

    if (!open) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <h3>{initialData ? 'Editar Puesto' : 'Agregar Puesto'}</h3>
                <form onSubmit={handleSubmit}>
                    <label>Nombre del Puesto:</label>
                    <input name="nombre_puesto" value={form.nombre_puesto} onChange={handleChange} required />
                    <label>Descripción:</label>
                    <input name="descripcion" value={form.descripcion} onChange={handleChange} required />
                    <div style={{marginTop: '1rem'}}>
                        <button type="submit" className="action-btn">Guardar</button>
                        <button type="button" className="delete-btn" onClick={onClose} style={{marginLeft: '0.5rem'}}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PuestoForm;
