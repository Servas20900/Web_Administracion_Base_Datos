import React, { useState, useEffect } from 'react';

const DetalleFacturaForm = ({ open, onClose, onSubmit, initialData }) => {
    const [form, setForm] = useState({
        factura: '',
        producto: '',
        cantidad: '',
        precio_unitario: ''
    });

    useEffect(() => {
        if (initialData) {
            setForm({
                factura: initialData.factura || '',
                producto: initialData.producto || '',
                cantidad: initialData.cantidad || '',
                precio_unitario: initialData.precio_unitario || ''
            });
        } else {
            setForm({
                factura: '',
                producto: '',
                cantidad: '',
                precio_unitario: ''
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
                <h3>{initialData ? 'Editar Detalle Factura' : 'Agregar Detalle Factura'}</h3>
                <form onSubmit={handleSubmit}>
                    <label>Factura:</label>
                    <input name="factura" value={form.factura} onChange={handleChange} required />
                    <label>Producto:</label>
                    <input name="producto" value={form.producto} onChange={handleChange} required />
                    <label>Cantidad:</label>
                    <input name="cantidad" type="number" value={form.cantidad} onChange={handleChange} required />
                    <label>Precio Unitario:</label>
                    <input name="precio_unitario" type="number" value={form.precio_unitario} onChange={handleChange} required />
                    <div style={{marginTop: '1rem'}}>
                        <button type="submit" className="action-btn">Guardar</button>
                        <button type="button" className="delete-btn" onClick={onClose} style={{marginLeft: '0.5rem'}}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DetalleFacturaForm;
