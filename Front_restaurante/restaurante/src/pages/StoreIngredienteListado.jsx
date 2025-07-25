import React, { useEffect, useState } from 'react';
import { getStoreIngredientes, eliminarStoreIngrediente, crearStoreIngrediente, actualizarStoreIngrediente } from '../services/storeingredienteService';
import ActionBar from '../components/ActionBar';
import StoreIngredienteForm from '../components/StoreIngredientes/StoreIngredienteForm';

const StoreIngredienteListado = () => {
    const [ingredientes, setIngredientes] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [editData, setEditData] = useState(null);

    useEffect(() => {
        cargarIngredientes();
    }, []);

    const cargarIngredientes = async () => {
        const res = await getStoreIngredientes();
        setIngredientes(res.data);
    };

    const handleEliminar = async (id) => {
        await eliminarStoreIngrediente(id);
        cargarIngredientes();
    };

    const handleAdd = () => {
        setEditData(null);
        setModalOpen(true);
    };
    const handleEdit = (ingrediente) => {
        setEditData(ingrediente);
        setModalOpen(true);
    };

    const handleFormSubmit = async (form) => {
        try {
            const payload = {
                nombre_ingrediente: form.nombre_ingrediente,
                cantidad: Number(form.cantidad)
            };
            if (editData && editData.id_ingrediente) {
                await actualizarStoreIngrediente(editData.id_ingrediente, payload);
            } else {
                await crearStoreIngrediente(payload);
            }
        } catch (err) {
            alert('Error al guardar el ingrediente');
        }
        setModalOpen(false);
        setEditData(null);
        cargarIngredientes();
    };

    return (
        <div>
            <h2>Lista de Ingredientes en Almacén</h2>
            <ActionBar onAdd={handleAdd} onUpdate={() => alert('Selecciona un ingrediente para actualizar usando el botón editar.')} />
            <div className="table-responsive">
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Nombre del Ingrediente</th>
                            <th>Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ingredientes.map(ingrediente => (
                            <tr key={ingrediente.id_ingrediente}>
                                <td>{ingrediente.nombre_ingrediente}</td>
                                <td>{ingrediente.cantidad}</td>
                                <td>
                                    <button className="delete-btn" onClick={() => handleEliminar(ingrediente.id_ingrediente)}>Eliminar</button>
                                    <button className="action-btn update" style={{marginLeft: '0.5rem'}} onClick={() => handleEdit(ingrediente)}>Editar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <StoreIngredienteForm open={modalOpen} onClose={() => { setModalOpen(false); setEditData(null); }} onSubmit={handleFormSubmit} initialData={editData} />
        </div>
    );
};

export default StoreIngredienteListado;
