import React, { useState, useEffect } from 'react';

const VendedorForm = ({ open, onClose, onSubmit, initialData }) => {
    const [form, setForm] = useState({
        nombre_proveedor: '',
        telefono: '',
        email: ''
    });

    useEffect(() => {
        if (initialData) {
            setForm({
                nombre_proveedor: initialData.nombre_proveedor || '',
                telefono: initialData.telefono || '',
                email: initialData.email || ''
            });
        } else {
            setForm({
                nombre_proveedor: '',
                telefono: '',
                email: ''
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
                <h3>{initialData ? 'Editar Vendedor' : 'Agregar Vendedor'}</h3>
                <form onSubmit={handleSubmit}>
                    <label>Nombre del Proveedor:</label>
                    <input name="nombre_proveedor" value={form.nombre_proveedor} onChange={handleChange} required />
                    <label>Teléfono:</label>
                    <input name="telefono" value={form.telefono} onChange={handleChange} required />
                    <label>Email:</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required />
                    <div style={{marginTop: '1rem'}}>
                        <button type="submit" className="action-btn">Guardar</button>
                        <button type="button" className="delete-btn" onClick={onClose} style={{marginLeft: '0.5rem'}}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default VendedorForm;
