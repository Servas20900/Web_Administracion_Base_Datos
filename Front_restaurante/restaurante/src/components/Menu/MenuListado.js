import React, { useEffect, useState } from 'react';
import { getMenus, eliminarMenu } from '../../services/menuService';

const MenuList = () => {
    const [menus, setMenus] = useState([]);

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

    return (
        <div>
            <h2>Lista de Menu</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Nombre Platillo</th>
                        <th>precio</th>
                        <th>descripcion</th>
                    </tr>
                </thead>
                <tbody>
                    {menus.map(menu => (
                        <tr key={menu.id_platillo}>
                            <td>{menu.nombre_platillo}</td>
                            <td>{menu.precio} </td>
                            <td>{menu.descripcion}</td>
                            <td>
                                <button onClick={() => handleEliminar(menu.id_platillo)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MenuList;
