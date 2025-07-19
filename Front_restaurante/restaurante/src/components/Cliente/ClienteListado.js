import React, { useEffect, useState } from 'react';
import { getClientes, eliminarCliente } from '../../services/clienteService';

const ClienteList = () => {
    const [clientes, setClientes] = useState([]);

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

    return (
        <div>
            <h2>Lista de Clientes</h2>
            <table border="1">
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
                                <button onClick={() => handleEliminar(cliente.id_cliente)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ClienteList;
