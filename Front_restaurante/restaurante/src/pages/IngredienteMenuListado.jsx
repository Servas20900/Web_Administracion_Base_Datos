import React, { useEffect, useState } from 'react';
import { getIngredienteMenus, eliminarIngredienteMenu, crearIngredienteMenu, actualizarIngredienteMenu } from '../services/ingredientemenuService';
import ActionBar from '../components/ActionBar';
import IngredienteMenuForm from '../components/IngredienteMenus/IngredienteMenuForm';

const IngredienteMenuListado = () => {
    const [ingredientesMenu, setIngredientesMenu] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [editData, setEditData] = useState(null);

    useEffect(() => {
        cargarIngredientesMenu();
    }, []);

    const cargarIngredientesMenu = async () => {
        const res = await getIngredienteMenus();
        setIngredientesMenu(res.data);
    };

    const handleEliminar = async (id) => {
        await eliminarIngredienteMenu(id);
        cargarIngredientesMenu();
    };

    const handleAdd = () => {
        setEditData(null);
        setModalOpen(true);
    };
    const handleEdit = (ingredienteMenu) => {
        setEditData(ingredienteMenu);
        setModalOpen(true);
    };

    const handleFormSubmit = async (form) => {
        try {
            const payload = {
                platillo: Number(form.platillo),
                ingrediente: Number(form.ingrediente),
                cantidad_utilizada: Number(form.cantidad_utilizada)
            };
            if (editData && editData.id) {
                await actualizarIngredienteMenu(editData.id, payload);
            } else {
                await crearIngredienteMenu(payload);
            }
        } catch (err) {
            alert('Error al guardar el ingrediente menu');
        }
        setModalOpen(false);
        setEditData(null);
        cargarIngredientesMenu();
    };

    return (
        <div>
            <h2>Lista de Ingredientes por Menú</h2>
            <ActionBar onAdd={handleAdd} onUpdate={() => alert('Selecciona un ingrediente para actualizar usando el botón editar.')} />
            <div className="table-responsive">
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Platillo</th>
                            <th>Ingrediente</th>
                            <th>Cantidad Utilizada</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ingredientesMenu.map(item => {
                            let platilloDesc = item.platillo?.nombre || item.platillo;
                            let ingredienteDesc = item.ingrediente?.nombre || item.ingrediente;
                            return (
                                <tr key={item.id}>
                                    <td>{platilloDesc}</td>
                                    <td>{ingredienteDesc}</td>
                                    <td>{item.cantidad_utilizada}</td>
                                    <td>
                                        <button className="delete-btn" onClick={() => handleEliminar(item.id)}>Eliminar</button>
                                        <button className="action-btn update" style={{marginLeft: '0.5rem'}} onClick={() => handleEdit(item)}>Editar</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <IngredienteMenuForm open={modalOpen} onClose={() => { setModalOpen(false); setEditData(null); }} onSubmit={handleFormSubmit} initialData={editData} />
        </div>
    );
};

export default IngredienteMenuListado;
