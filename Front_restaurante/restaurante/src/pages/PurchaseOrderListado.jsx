import React, { useEffect, useState } from 'react';
import { getPurchaseOrders, eliminarPurchaseOrder, crearPurchaseOrder, actualizarPurchaseOrder } from '../services/purchaseorderService';
import ActionBar from '../components/ActionBar';
import PurchaseOrderForm from '../components/PurchaseOrders/PurchaseOrderForm';

const PurchaseOrderListado = () => {
    const [orders, setOrders] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [editData, setEditData] = useState(null);

    useEffect(() => {
        cargarOrders();
    }, []);

    const cargarOrders = async () => {
        const res = await getPurchaseOrders();
        setOrders(res.data);
    };

    const handleEliminar = async (id) => {
        await eliminarPurchaseOrder(id);
        cargarOrders();
    };

    const handleAdd = () => {
        setEditData(null);
        setModalOpen(true);
    };
    const handleEdit = (order) => {
        setEditData(order);
        setModalOpen(true);
    };

    const handleFormSubmit = async (form) => {
        try {
            const payload = {
                proveedor: Number(form.proveedor),
                empleado: Number(form.empleado),
                fecha: form.fecha,
                estado: form.estado
            };
            if (editData && editData.id_po) {
                await actualizarPurchaseOrder(editData.id_po, payload);
            } else {
                await crearPurchaseOrder(payload);
            }
        } catch (err) {
            alert('Error al guardar la orden de compra');
        }
        setModalOpen(false);
        setEditData(null);
        cargarOrders();
    };

    return (
        <div>
            <h2>Lista de Purchase Orders</h2>
            <ActionBar onAdd={handleAdd} onUpdate={() => alert('Selecciona una orden para actualizar usando el botón editar.')} />
            <div className="table-responsive">
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Proveedor</th>
                            <th>Empleado</th>
                            <th>Fecha</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => {
                            let proveedorDesc = order.proveedor?.nombre || order.proveedor;
                            let empleadoDesc = order.empleado?.nombre || order.empleado;
                            return (
                                <tr key={order.id_po}>
                                    <td>{proveedorDesc}</td>
                                    <td>{empleadoDesc}</td>
                                    <td>{order.fecha}</td>
                                    <td>{order.estado}</td>
                                    <td>
                                        <button className="delete-btn" onClick={() => handleEliminar(order.id_po)}>Eliminar</button>
                                        <button className="action-btn update" style={{marginLeft: '0.5rem'}} onClick={() => handleEdit(order)}>Editar</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <PurchaseOrderForm open={modalOpen} onClose={() => { setModalOpen(false); setEditData(null); }} onSubmit={handleFormSubmit} initialData={editData} />
        </div>
    );
};

export default PurchaseOrderListado;
