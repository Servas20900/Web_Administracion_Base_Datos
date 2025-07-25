import React, { useEffect, useState } from 'react';
import { getEmpleados, crearEmpleado, actualizarEmpleado, eliminarEmpleado } from '../services/empleadosService';
import ActionBar from '../components/ActionBar';
import EmpleadoForm from '../components/Empleado/EmpleadoForm';

const EmpleadoListado = () => {
    const [empleados, setEmpleados] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [editData, setEditData] = useState(null);

    useEffect(() => {
        cargarEmpleados();
    }, []);

    const cargarEmpleados = async () => {
        const res = await getEmpleados();
        setEmpleados(res.data);
    };

    const handleEliminar = async (id) => {
        await eliminarEmpleado(id);
        cargarEmpleados();
    };

    const handleAdd = () => {
        setEditData(null);
        setModalOpen(true);
    };
    const handleEdit = (empleado) => {
        setEditData(empleado);
        setModalOpen(true);
    };

    const handleFormSubmit = async (form) => {
        try {
            if (editData && form.id_empleado) {
                await actualizarEmpleado(form.id_empleado, {
                    nombre: form.nombre,
                    primer_apellido: form.primer_apellido,
                    segundo_apellido: form.segundo_apellido,
                    puesto: form.puesto,
                    salario: form.salario,
                    telefono: form.telefono,    
                    email: form.email,
                });
            } else {
                await crearEmpleado({
                    nombre: form.nombre,
                    primer_apellido: form.primer_apellido,
                    segundo_apellido: form.segundo_apellido,
                    puesto: form.puesto,
                    salario: form.salario,
                    telefono: form.telefono,    
                    email: form.email,
                });
            }
        } catch (err) {
            alert('Error al guardar el cliente');
        }
        setModalOpen(false);
        setEditData(null);
        cargarEmpleados();
    };

    return (
        <div>
            <h2>Lista de Empleados</h2>
            <ActionBar onAdd={handleAdd} onUpdate={() => alert('Selecciona un empleado para actualizar usando el botón editar.')} />
            <div className="table-responsive">
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Nombre completo</th>
                            <th>puesto</th>
                            <th>salario</th>
                            <th>Teléfono</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {empleados.map(empleado => (
                            <tr key={empleado.id_empleado}>
                                <td>{empleado.nombre} {empleado.primer_apellido} {empleado.segundo_apellido}</td>

                                <td>{empleado.email}</td>
                                <td>{empleado.telefono}</td>
                                <td>
                                    <button className="delete-btn" onClick={() => handleEliminar(empleado.id_cliente)}>Eliminar</button>
                                    <button className="action-btn update" style={{marginLeft: '0.5rem'}} onClick={() => handleEdit(empleado)}>Editar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <EmpleadoForm open={modalOpen} onClose={() => { setModalOpen(false); setEditData(null); }} onSubmit={handleFormSubmit} initialData={editData} />
        </div>
    );
};

export default EmpleadoListado;
