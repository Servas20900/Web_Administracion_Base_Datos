import React, { useEffect, useState } from 'react';
import { getFacturas, eliminarFactura, crearFactura, actualizarFactura } from '../services/facturasService';
import ActionBar from '../components/ActionBar';
import FacturaForm from '../components/Facturas/FacturaForm';

const FacturaListado = () => {
    const [facturas, setFacturas] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [editData, setEditData] = useState(null);

    useEffect(() => {
        cargarFacturas();
    }, []);

    const cargarFacturas = async () => {
        const res = await getFacturas();
        setFacturas(res.data);
    };

    const handleEliminar = async (id) => {
        await eliminarFactura(id);
        cargarFacturas();
    };

    const handleAdd = () => {
        setEditData(null);
        setModalOpen(true);
    };
    const handleEdit = (cliente) => {
        setEditData(cliente);
        setModalOpen(true);
    };

    const handleFormSubmit = async (form) => {
        try {
            const facturaPayload = {
                cliente: Number(form.cliente), 
                empleado: Number(form.empleado), 
                fecha: form.fecha,
                estado: form.estado
            };
            if (editData && form.id_factura) {
                await actualizarFactura(form.id_factura, facturaPayload);
            } else {
                await crearFactura(facturaPayload);
            }
        } catch (err) {
            alert('Error al guardar el factura');
        }
        setModalOpen(false);
        setEditData(null);
        cargarFacturas();
    };

    return (
        <div>
            <h2>Lista de Facturas</h2>
            <ActionBar onAdd={handleAdd} onUpdate={() => alert('Selecciona un factura para actualizar usando el botón editar.')} />
            <div className="table-responsive">
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>cliente</th>
                            <th>empleado</th>
                            <th>fecha</th>
                            <th>estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {facturas.map(factura => {
                            // Si factura.cliente y factura.empleado son ids, busca el objeto para mostrar el nombre
                            let clienteNombre = factura.cliente?.nombre;
                            let empleadoNombre = factura.empleado?.nombre;
                            if (typeof factura.cliente === 'number' && Array.isArray(window.clientes)) {
                                const c = window.clientes.find(x => x.id_cliente === factura.cliente);
                                clienteNombre = c ? `${c.nombre} ${c.primer_apellido} ${c.segundo_apellido}` : factura.cliente;
                            }
                            if (typeof factura.empleado === 'number' && Array.isArray(window.empleados)) {
                                const e = window.empleados.find(x => x.id_empleado === factura.empleado);
                                empleadoNombre = e ? `${e.nombre} ${e.primer_apellido} ${e.segundo_apellido}` : factura.empleado;
                            }
                            return (
                                <tr key={factura.id_factura}>
                                    <td>{clienteNombre}</td>
                                    <td>{empleadoNombre}</td>
                                    <td>{factura.fecha}</td>
                                    <td>{factura.estado}</td>
                                    <td>
                                        <button className="delete-btn" onClick={() => handleEliminar(factura.id_factura)}>Eliminar</button>
                                        <button className="action-btn update" style={{marginLeft: '0.5rem'}} onClick={() => handleEdit(factura)}>Editar</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <FacturaForm open={modalOpen} onClose={() => { setModalOpen(false); setEditData(null); }} onSubmit={handleFormSubmit} initialData={editData} />
        </div>
    );
};

export default FacturaListado;
