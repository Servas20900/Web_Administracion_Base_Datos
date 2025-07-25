import React, { useEffect, useState } from 'react';
import { getPuestos, eliminarPuesto, crearPuesto, actualizarPuesto } from '../services/puestoService';
import ActionBar from '../components/ActionBar';
import PuestoForm from '../components/Puestos/PuestoForm';

const PuestoListado = () => {
    const [puestos, setPuestos] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [editData, setEditData] = useState(null);

    useEffect(() => {
        cargarPuestos();
    }, []);

    const cargarPuestos = async () => {
        const res = await getPuestos();
        setPuestos(res.data);
    };

    const handleEliminar = async (id) => {
        await eliminarPuesto(id);
        cargarPuestos();
    };

    const handleAdd = () => {
        setEditData(null);
        setModalOpen(true);
    };
    const handleEdit = (puesto) => {
        setEditData(puesto);
        setModalOpen(true);
    };

    const handleFormSubmit = async (form) => {
        try {
            const payload = {
                nombre_puesto: form.nombre_puesto,
                descripcion: form.descripcion
            };
            if (editData && editData.id_puesto) {
                await actualizarPuesto(editData.id_puesto, payload);
            } else {
                await crearPuesto(payload);
            }
        } catch (err) {
            alert('Error al guardar el puesto');
        }
        setModalOpen(false);
        setEditData(null);
        cargarPuestos();
    };

    return (
        <div>
            <h2>Lista de Puestos</h2>
            <ActionBar onAdd={handleAdd} onUpdate={() => alert('Selecciona un puesto para actualizar usando el botón editar.')} />
            <div className="table-responsive">
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Nombre del Puesto</th>
                            <th>Descripción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {puestos.map(puesto => (
                            <tr key={puesto.id_puesto}>
                                <td>{puesto.nombre_puesto}</td>
                                <td>{puesto.descripcion}</td>
                                <td>
                                    <button className="delete-btn" onClick={() => handleEliminar(puesto.id_puesto)}>Eliminar</button>
                                    <button className="action-btn update" style={{marginLeft: '0.5rem'}} onClick={() => handleEdit(puesto)}>Editar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <PuestoForm open={modalOpen} onClose={() => { setModalOpen(false); setEditData(null); }} onSubmit={handleFormSubmit} initialData={editData} />
        </div>
    );
};

export default PuestoListado;
