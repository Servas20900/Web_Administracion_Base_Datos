import React, { useState, useEffect } from 'react';

const StoreIngredienteForm = ({ open, onClose, onSubmit, initialData }) => {
    const [form, setForm] = useState({
        nombre_ingrediente: '',
        cantidad: ''
    });

    useEffect(() => {
        if (initialData) {
            setForm({
                nombre_ingrediente: initialData.nombre_ingrediente || '',
                cantidad: initialData.cantidad || ''
            });
        } else {
            setForm({
                nombre_ingrediente: '',
                cantidad: ''
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
                <h3>{initialData ? 'Editar Ingrediente' : 'Agregar Ingrediente'}</h3>
                <form onSubmit={handleSubmit}>
                    <label>Nombre del Ingrediente:</label>
                    <input name="nombre_ingrediente" value={form.nombre_ingrediente} onChange={handleChange} required />
                    <label>Cantidad:</label>
                    <input name="cantidad" type="number" value={form.cantidad} onChange={handleChange} required />
                    <div style={{marginTop: '1rem'}}>
                        <button type="submit" className="action-btn">Guardar</button>
                        <button type="button" className="delete-btn" onClick={onClose} style={{marginLeft: '0.5rem'}}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default StoreIngredienteForm;
