import React, { useState, useEffect } from 'react';

const IngredienteMenuForm = ({ open, onClose, onSubmit, initialData }) => {
    const [form, setForm] = useState({
        platillo: '',
        ingrediente: '',
        cantidad_utilizada: ''
    });

    useEffect(() => {
        if (initialData) {
            setForm({
                platillo: initialData.platillo || '',
                ingrediente: initialData.ingrediente || '',
                cantidad_utilizada: initialData.cantidad_utilizada || ''
            });
        } else {
            setForm({
                platillo: '',
                ingrediente: '',
                cantidad_utilizada: ''
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
                <h3>{initialData ? 'Editar Ingrediente Menu' : 'Agregar Ingrediente Menu'}</h3>
                <form onSubmit={handleSubmit}>
                    <label>Platillo:</label>
                    <select name="platillo" value={form.platillo} onChange={handleChange} required>
                        <option value="">Seleccione...</option>
                        {Array.isArray(window.menus) && window.menus.map(menu => (
                            <option key={menu.id_platillo} value={menu.id_platillo}>{menu.nombre}</option>
                        ))}
                    </select>
                    <label>Ingrediente:</label>
                    <select name="ingrediente" value={form.ingrediente} onChange={handleChange} required>
                        <option value="">Seleccione...</option>
                        {Array.isArray(window.storeingredientes) && window.storeingredientes.map(ing => (
                            <option key={ing.id_ingrediente} value={ing.id_ingrediente}>{ing.nombre}</option>
                        ))}
                    </select>
                    <label>Cantidad Utilizada:</label>
                    <input name="cantidad_utilizada" type="number" value={form.cantidad_utilizada} onChange={handleChange} required />
                    <div style={{marginTop: '1rem'}}>
                        <button type="submit" className="action-btn">Guardar</button>
                        <button type="button" className="delete-btn" onClick={onClose} style={{marginLeft: '0.5rem'}}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default IngredienteMenuForm;
