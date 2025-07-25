import React, { useState, useEffect } from 'react';

const PurchaseOrderForm = ({ open, onClose, onSubmit, initialData }) => {
    const [form, setForm] = useState({
        proveedor: '',
        empleado: '',
        fecha: '',
        estado: ''
    });

    useEffect(() => {
        if (initialData) {
            setForm({
                proveedor: initialData.proveedor || '',
                empleado: initialData.empleado || '',
                fecha: initialData.fecha ? initialData.fecha.substring(0, 10) : '',
                estado: initialData.estado || ''
            });
        } else {
            setForm({
                proveedor: '',
                empleado: '',
                fecha: '',
                estado: ''
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
                <h3>{initialData ? 'Editar Purchase Order' : 'Agregar Purchase Order'}</h3>
                <form onSubmit={handleSubmit}>
                    <label>Proveedor:</label>
                    <select name="proveedor" value={form.proveedor} onChange={handleChange} required>
                        <option value="">Seleccione...</option>
                        {Array.isArray(window.vendedores) && window.vendedores.map(v => (
                            <option key={v.id_vendedor} value={v.id_vendedor}>{v.nombre}</option>
                        ))}
                    </select>
                    <label>Empleado:</label>
                    <select name="empleado" value={form.empleado} onChange={handleChange} required>
                        <option value="">Seleccione...</option>
                        {Array.isArray(window.empleados) && window.empleados.map(e => (
                            <option key={e.id_empleado} value={e.id_empleado}>{e.nombre}</option>
                        ))}
                    </select>
                    <label>Fecha:</label>
                    <input name="fecha" type="date" value={form.fecha} onChange={handleChange} required />
                    <label>Estado:</label>
                    <input name="estado" value={form.estado} onChange={handleChange} required />
                    <div style={{marginTop: '1rem'}}>
                        <button type="submit" className="action-btn">Guardar</button>
                        <button type="button" className="delete-btn" onClick={onClose} style={{marginLeft: '0.5rem'}}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PurchaseOrderForm;
