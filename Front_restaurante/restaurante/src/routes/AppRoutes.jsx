//Para que sirva npm install react-router-dom

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';

import Home from '../pages/Home';
import ClienteListado from '../pages/ClienteListado';
import MenuListado from '../pages/MenuListado';
import EmpleadoListado from '../pages/EmpleadoListado';
import FacturaListado from '../pages/FacturaListado';
import DetalleFacturaListado from '../pages/DetalleFacturaListado';
import DetallePurchaseOrderListado from '../pages/DetallePurchaseOrderListado';
import IngredienteMenuListado from '../pages/IngredienteMenuListado';
import PuestoListado from '../pages/PuestoListado';
import PurchaseOrderListado from '../pages/PurchaseOrderListado';
import StoreIngredienteListado from '../pages/StoreIngredienteListado';
import VendedorListado from '../pages/VendedorListado';

//import NotFound from '../pages/NotFound'; // 404 opcional

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/clientes" element={<MainLayout><ClienteListado /></MainLayout>} />
      <Route path="/menus" element={<MainLayout><MenuListado /></MainLayout>} />
      <Route path="/empleados" element={<MainLayout><EmpleadoListado /></MainLayout>} />
      <Route path="/facturas" element={<MainLayout><FacturaListado/></MainLayout>} />
      <Route path="/detalle-facturas" element={<MainLayout><DetalleFacturaListado /></MainLayout>} />
      <Route path="/detalle-purchaseorders" element={<MainLayout><DetallePurchaseOrderListado /></MainLayout>} />
      <Route path="/ingrediente-menus" element={<MainLayout><IngredienteMenuListado /></MainLayout>} />
      <Route path="/puestos" element={<MainLayout><PuestoListado /></MainLayout>} />
      <Route path="/purchaseorders" element={<MainLayout><PurchaseOrderListado /></MainLayout>} />
      <Route path="/storeingredientes" element={<MainLayout><StoreIngredienteListado /></MainLayout>} />
      <Route path="/vendedores" element={<MainLayout><VendedorListado /></MainLayout>} />


      {/* Redirección por defecto */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
//     <Route path="/404" element={<NotFound />} />
