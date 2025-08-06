import React, { useState, useEffect } from 'react';

const DetalleFacturaForm = ({ open, onClose, onSubmit, initialData, facturas = [], platillos = [] }) => {
    const [form, setForm] = useState({
        factura: '',
        platillo: '',
        cantidad: '',
        precio: ''
    });

    useEffect(() => {
        if (initialData) {
            setForm({
                factura: initialData.factura?.id_factura || initialData.factura || '',
                platillo: initialData.platillo?.id_platillo || initialData.platillo || '',
                cantidad: initialData.cantidad || '',
                precio: initialData.precio || ''
            });
        } else {
            setForm({
                factura: '',
                platillo: '',
                cantidad: '',
                precio: ''
            });
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Enviar solo los IDs (strings o números)
        const cleanedForm = {
            factura: form.factura,
            platillo: form.platillo,
            cantidad: form.cantidad,
            precio: form.precio
        };

        onSubmit(cleanedForm);
    };

    if (!open) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <h3>{initialData ? 'Editar Detalle Factura' : 'Agregar Detalle Factura'}</h3>
                <form onSubmit={handleSubmit}>
                    <label>Factura (ID):</label>
                    <select
                        name="factura"
                        value={form.factura}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Seleccione una factura</option>
                        {facturas.map(f => (
                            <option key={f.id_factura} value={f.id_factura}>
                                {`#${f.id_factura} - ${f.cliente?.nombre || 'Cliente'} - ${f.fecha}`}
                            </option>
                        ))}
                    </select>

                    <label>Platillo (ID):</label>
                    <select
                        name="platillo"
                        value={form.platillo}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Seleccione un platillo</option>
                        {platillos.map(p => (
                            <option key={p.id_platillo} value={p.id_platillo}>
                                {p.nombre}
                            </option>
                        ))}
                    </select>

                    <label>Cantidad:</label>
                    <input
                        name="cantidad"
                        type="number"
                        value={form.cantidad}
                        onChange={handleChange}
                        required
                        min="1"
                    />

                    <label>Precio:</label>
                    <input
                        name="precio"
                        type="number"
                        step="0.01"
                        value={form.precio}
                        onChange={handleChange}
                        required
                        min="0"
                    />

                    <div style={{ marginTop: '1rem' }}>
                        <button type="submit" className="action-btn">Guardar</button>
                        <button
                            type="button"
                            className="delete-btn"
                            onClick={onClose}
                            style={{ marginLeft: '0.5rem' }}
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DetalleFacturaForm;
