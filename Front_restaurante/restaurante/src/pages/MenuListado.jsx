import React, { useEffect, useState } from 'react';
import { getMenus, eliminarMenu, crearMenu, actualizarMenu } from '../services/menuService';

import ActionBar from '../components/ActionBar';
import MenuForm from '../components/Menu/MenuForm';
import './ClienteListado.css';

const MenuListado = () => {
    const [menus, setMenus] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [editData, setEditData] = useState(null);

    useEffect(() => {
        cargarMenus();
    }, []);

    const cargarMenus = async () => {
        const res = await getMenus();
        setMenus(res.data);
    };

    const handleEliminar = async (id) => {
        await eliminarMenu(id);
        cargarMenus();
    };


    const handleAdd = () => {
        setEditData(null);
        setModalOpen(true);
    };
    const handleUpdate = () => {
        // Si hay selección, aquí podrías abrir el modal con datos
        alert('Selecciona un platillo para actualizar (implementación de selección pendiente)');
    };

    const handleEdit = (menu) => {
        setEditData(menu);
        setModalOpen(true);
    };

    const handleFormSubmit = async (form) => {
        try {
            if (editData && form.id_platillo) {
                // Actualizar platillo
                await actualizarMenu(form.id_platillo, {
                    nombre_platillo: form.nombre_platillo,
                    precio: form.precio,
                    descripcion: form.descripcion
                });
            } else {
                // Agregar platillo
                await crearMenu({
                    nombre_platillo: form.nombre_platillo,
                    precio: form.precio,
                    descripcion: form.descripcion
                });
            }
        } catch (err) {
            alert('Error al guardar el platillo');
        }
        setModalOpen(false);
        setEditData(null);
        cargarMenus();
    };

    return (
        <div>
            <h2>Lista de Menú</h2>
            <ActionBar onAdd={handleAdd} onUpdate={handleUpdate} addLabel="Agregar platillo" updateLabel="Actualizar platillo" />
            <div className="table-responsive">
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Nombre Platillo</th>
                            <th>Precio</th>
                            <th>Descripción</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menus.map(menu => (
                            <tr key={menu.id_platillo}>
                                <td>{menu.nombre_platillo}</td>
                                <td>{menu.precio}</td>
                                <td>{menu.descripcion}</td>
                                <td>
                                    <button className="delete-btn" onClick={() => handleEliminar(menu.id_platillo)}>Eliminar</button>
                                    <button className="action-btn update" style={{marginLeft: '0.5rem'}} onClick={() => handleEdit(menu)}>Editar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <MenuForm open={modalOpen} onClose={() => { setModalOpen(false); setEditData(null); }} onSubmit={handleFormSubmit} initialData={editData} />
        </div>
    );
};

export default MenuListado;
