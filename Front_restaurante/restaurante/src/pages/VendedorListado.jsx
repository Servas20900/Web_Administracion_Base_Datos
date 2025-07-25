import React, { useEffect, useState } from 'react';
import { getVendedores, eliminarVendedor, crearVendedor, actualizarVendedor } from '../services/vendedorService';
import ActionBar from '../components/ActionBar';
import VendedorForm from '../components/Vendedores/VendedorForm';

const VendedorListado = () => {
    const [vendedores, setVendedores] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [editData, setEditData] = useState(null);

    useEffect(() => {
        cargarVendedores();
    }, []);

    const cargarVendedores = async () => {
        const res = await getVendedores();
        setVendedores(res.data);
    };

    const handleEliminar = async (id) => {
        await eliminarVendedor(id);
        cargarVendedores();
    };

    const handleAdd = () => {
        setEditData(null);
        setModalOpen(true);
    };
    const handleEdit = (vendedor) => {
        setEditData(vendedor);
        setModalOpen(true);
    };

    const handleFormSubmit = async (form) => {
        try {
            const payload = {
                nombre_proveedor: form.nombre_proveedor,
                telefono: form.telefono,
                email: form.email
            };
            if (editData && editData.id_vendor) {
                await actualizarVendedor(editData.id_vendor, payload);
            } else {
                await crearVendedor(payload);
            }
        } catch (err) {
            alert('Error al guardar el vendedor');
        }
        setModalOpen(false);
        setEditData(null);
        cargarVendedores();
    };

    return (
        <div>
            <h2>Lista de Vendedores</h2>
            <ActionBar onAdd={handleAdd} onUpdate={() => alert('Selecciona un vendedor para actualizar usando el botón editar.')} />
            <div className="table-responsive">
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Nombre del Proveedor</th>
                            <th>Teléfono</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vendedores.map(vendedor => (
                            <tr key={vendedor.id_vendor}>
                                <td>{vendedor.nombre_proveedor}</td>
                                <td>{vendedor.telefono}</td>
                                <td>{vendedor.email}</td>
                                <td>
                                    <button className="delete-btn" onClick={() => handleEliminar(vendedor.id_vendor)}>Eliminar</button>
                                    <button className="action-btn update" style={{marginLeft: '0.5rem'}} onClick={() => handleEdit(vendedor)}>Editar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <VendedorForm open={modalOpen} onClose={() => { setModalOpen(false); setEditData(null); }} onSubmit={handleFormSubmit} initialData={editData} />
        </div>
    );
};

export default VendedorListado;
