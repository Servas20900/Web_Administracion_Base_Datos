import React, { useEffect, useState } from 'react';
import { getClientes, eliminarCliente, crearCliente, actualizarCliente } from '../services/clienteService';
import ActionBar from '../components/ActionBar';
import ClienteForm from '../components/Cliente/ClienteForm';

const ClienteListado = () => {
    const [clientes, setClientes] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [editData, setEditData] = useState(null);

    useEffect(() => {
        cargarClientes();
    }, []);

    const cargarClientes = async () => {
        const res = await getClientes();
        setClientes(res.data);
    };

    const handleEliminar = async (id) => {
        await eliminarCliente(id);
        cargarClientes();
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
            if (editData && form.id_cliente) {
                await actualizarCliente(form.id_cliente, {
                    nombre: form.nombre,
                    primer_apellido: form.primer_apellido,
                    segundo_apellido: form.segundo_apellido,
                    email: form.email,
                    telefono: form.telefono
                });
            } else {
                await crearCliente({
                    nombre: form.nombre,
                    primer_apellido: form.primer_apellido,
                    segundo_apellido: form.segundo_apellido,
                    email: form.email,
                    telefono: form.telefono
                });
            }
        } catch (err) {
            alert('Error al guardar el cliente');
        }
        setModalOpen(false);
        setEditData(null);
        cargarClientes();
    };

    return (
        <div>
            <h2>Lista de Clientes</h2>
            <ActionBar onAdd={handleAdd} onUpdate={() => alert('Selecciona un cliente para actualizar usando el botón editar.')} />
            <div className="table-responsive">
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Nombre completo</th>
                            <th>Email</th>
                            <th>Teléfono</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map(cliente => (
                            <tr key={cliente.id_cliente}>
                                <td>{cliente.nombre} {cliente.primer_apellido} {cliente.segundo_apellido}</td>
                                <td>{cliente.email}</td>
                                <td>{cliente.telefono}</td>
                                <td>
                                    <button className="delete-btn" onClick={() => handleEliminar(cliente.id_cliente)}>Eliminar</button>
                                    <button className="action-btn update" style={{marginLeft: '0.5rem'}} onClick={() => handleEdit(cliente)}>Editar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <ClienteForm open={modalOpen} onClose={() => { setModalOpen(false); setEditData(null); }} onSubmit={handleFormSubmit} initialData={editData} />
        </div>
    );
};

export default ClienteListado;
