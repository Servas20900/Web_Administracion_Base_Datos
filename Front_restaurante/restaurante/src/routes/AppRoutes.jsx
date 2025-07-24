//Para que sirva npm install react-router-dom

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';

import Home from '../pages/Home';
import ClienteListado from '../pages/ClienteListado';
import MenuListado from '../pages/MenuListado';
import Facturas from '../pages/Facturas';
import Empleados from '../pages/Empleados';
import Inventario from '../pages/Inventario';
import Proveedores from '../pages/Proveedores';

//import NotFound from '../pages/NotFound'; // 404 opcional

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/clientes" element={<MainLayout><ClienteListado /></MainLayout>} />
      <Route path="/menus" element={<MainLayout><MenuListado /></MainLayout>} />
      <Route path="/facturas" element={<MainLayout><Facturas /></MainLayout>} />
      <Route path="/empleados" element={<MainLayout><Empleados /></MainLayout>} />
      <Route path="/inventario" element={<MainLayout><Inventario /></MainLayout>} />
      <Route path="/proveedores" element={<MainLayout><Proveedores /></MainLayout>} />
      {/* Redirección por defecto */}
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
};

export default AppRoutes;
//     <Route path="/404" element={<NotFound />} />
