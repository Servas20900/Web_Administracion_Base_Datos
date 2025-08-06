import React, { useState, useEffect } from 'react';


const DetallePurchaseOrderForm = ({ open, onClose, onSubmit, initialData, purchaseorders = [], storeingredientes = [] }) => {
    const [form, setForm] = useState({
        ordenCompra: '', // id_po
        ingrediente: '', // id_ingrediente
        precio: '',
        cantidad: ''
    });

    useEffect(() => {
        if (initialData) {
            setForm({
                ordenCompra: initialData.ordenCompra?.id_po || initialData.ordenCompra || '',
                ingrediente: initialData.ingrediente?.id_ingrediente || initialData.ingrediente || '',
                precio: initialData.precio || '',
                cantidad: initialData.cantidad || ''
            });
        } else {
            setForm({
                ordenCompra: '',
                ingrediente: '',
                precio: '',
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
        // Enviar solo los IDs y valores simples
        const cleanedForm = {
            ordenCompra: form.ordenCompra,
            ingrediente: form.ingrediente,
            precio: form.precio,
            cantidad: form.cantidad
        };
        onSubmit(cleanedForm);
    };

    if (!open) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <h3>{initialData ? 'Editar Detalle Purchase Order' : 'Agregar Detalle Purchase Order'}</h3>
                <form onSubmit={handleSubmit}>
                    <label>Orden de Compra:</label>
                    <select name="ordenCompra" value={form.ordenCompra} onChange={handleChange} required>
                        <option value="">Seleccione...</option>
                        {purchaseorders.map(po => (
                            <option key={po.id_po} value={po.id_po}>{`#${po.id_po} - ${po.fecha}`}</option>
                        ))}
                    </select>
                    <label>Ingrediente:</label>
                    <select name="ingrediente" value={form.ingrediente} onChange={handleChange} required>
                        <option value="">Seleccione...</option>
                        {storeingredientes.map(ing => (
                            <option key={ing.id_ingrediente} value={ing.id_ingrediente}>{ing.nombre}</option>
                        ))}
                    </select>
                    <label>Precio:</label>
                    <input name="precio" type="number" value={form.precio} onChange={handleChange} required />
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

export default DetallePurchaseOrderForm;
