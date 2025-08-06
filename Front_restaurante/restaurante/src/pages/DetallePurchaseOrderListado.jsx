
import React, { useEffect, useState } from 'react';
import { getDetallePurchaseOrders, eliminarDetallePurchaseOrder, crearDetallePurchaseOrder, actualizarDetallePurchaseOrder } from '../services/detallepurchaseordersService';
import { getPurchaseOrders } from '../services/purchaseordersService';
import { getStoreIngredientes } from '../services/storeingredientesService';
import ActionBar from '../components/ActionBar';
import DetallePurchaseOrderForm from '../components/DetallePurchaseOrders/DetallePurchaseOrderForm';

const DetallePurchaseOrderListado = () => {

    const [detalles, setDetalles] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [editData, setEditData] = useState(null);
    const [purchaseorders, setPurchaseOrders] = useState([]);
    const [storeingredientes, setStoreIngredientes] = useState([]);


    useEffect(() => {
        cargarDetalles();
        getPurchaseOrders().then(res => setPurchaseOrders(res.data));
        getStoreIngredientes().then(res => setStoreIngredientes(res.data));
    }, []);

    const cargarDetalles = async () => {
        const res = await getDetallePurchaseOrders();
        setDetalles(res.data);
    };

    const handleEliminar = async (id) => {
        await eliminarDetallePurchaseOrder(id);
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
                ordenCompra: Number(form.ordenCompra),
                ingrediente: Number(form.ingrediente),
                precio: Number(form.precio),
                cantidad: Number(form.cantidad)
            };
            if (editData && editData.id_detalle_po) {
                await actualizarDetallePurchaseOrder(editData.id_detalle_po, payload);
            } else {
                await crearDetallePurchaseOrder(payload);
            }
        } catch (err) {
            alert('Error al guardar el detalle purchase order');
        }
        setModalOpen(false);
        setEditData(null);
        cargarDetalles();
    };


    return (
        <div>
            <h2>Lista de Detalles de Purchase Order</h2>
            <ActionBar onAdd={handleAdd} onUpdate={() => alert('Selecciona un detalle para actualizar usando el botón editar.')} />
            <div className="table-responsive">
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Orden de Compra</th>
                            <th>Ingrediente</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {detalles.map(detalle => {
                            let ordenCompraDesc = detalle.ordenCompra?.id_po || detalle.ordenCompra;
                            let ingredienteDesc = detalle.ingrediente?.nombre || detalle.ingrediente?.id_ingrediente || detalle.ingrediente;
                            return (
                                <tr key={detalle.id_detalle_po}>
                                    <td>{ordenCompraDesc}</td>
                                    <td>{ingredienteDesc}</td>
                                    <td>{detalle.precio}</td>
                                    <td>{detalle.cantidad}</td>
                                    <td>
                                        <button className="delete-btn" onClick={() => handleEliminar(detalle.id_detalle_po)}>Eliminar</button>
                                        <button className="action-btn update" style={{marginLeft: '0.5rem'}} onClick={() => handleEdit(detalle)}>Editar</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <DetallePurchaseOrderForm
                open={modalOpen}
                onClose={() => { setModalOpen(false); setEditData(null); }}
                onSubmit={handleFormSubmit}
                initialData={editData}
                purchaseorders={purchaseorders}
                storeingredientes={storeingredientes}
            />
        </div>
    );
};

export default DetallePurchaseOrderListado;
