import React, { useEffect, useState } from 'react';
import { getDetalleFacturas, eliminarDetalleFactura, crearDetalleFactura, actualizarDetalleFactura } from '../services/detalleFacturaService';
import ActionBar from '../components/ActionBar';
import DetalleFacturaForm from '../components/DetalleFacturas/DetalleFacturaForm';

const DetalleFacturaListado = () => {
    const [detalles, setDetalles] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [editData, setEditData] = useState(null);

    useEffect(() => {
        cargarDetalles();
    }, []);

    const cargarDetalles = async () => {
        const res = await getDetalleFacturas();
        setDetalles(res.data);
    };

    const handleEliminar = async (id) => {
        await eliminarDetalleFactura(id);
        cargarDetalles();
    };

    const handleAdd = () => {
        setEditData(null);
        setModalOpen(true);
    };
    const handleEdit = (detalle) => {
        setEditData(detalle);
        setModalOpen(true);
    };

    const handleFormSubmit = async (form) => {
        try {
            const payload = {
                factura: Number(form.factura),
                platillo: Number(form.platillo),
                precio: Number(form.precio),
                cantidad: Number(form.cantidad)
            };
            if (editData && editData.id_detalle_factura) {
                await actualizarDetalleFactura(editData.id_detalle_factura, payload);
            } else {
                await crearDetalleFactura(payload);
            }
        } catch (err) {
            alert('Error al guardar el detalle factura');
        }
        setModalOpen(false);
        setEditData(null);
        cargarDetalles();
    };

    return (
        <div>
            <h2>Lista de Detalles de Factura</h2>
            <ActionBar onAdd={handleAdd} onUpdate={() => alert('Selecciona un detalle para actualizar usando el botón editar.')} />
            <div className="table-responsive">
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Factura</th>
                            <th>Platillo</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {detalles.map(detalle => (
                            <tr key={detalle.id_detalle_factura}>
                                <td>{detalle.factura?.id_factura || detalle.factura}</td>
                                <td>{detalle.platillo?.nombre || detalle.platillo?.id_platillo || detalle.platillo}</td>
                                <td>{detalle.precio}</td>
                                <td>{detalle.cantidad}</td>
                                <td>
                                    <button className="delete-btn" onClick={() => handleEliminar(detalle.id_detalle_factura)}>Eliminar</button>
                                    <button className="action-btn update" style={{marginLeft: '0.5rem'}} onClick={() => handleEdit(detalle)}>Editar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <DetalleFacturaForm open={modalOpen} onClose={() => { setModalOpen(false); setEditData(null); }} onSubmit={handleFormSubmit} initialData={editData} />
        </div>
    );
};

export default DetalleFacturaListado;
