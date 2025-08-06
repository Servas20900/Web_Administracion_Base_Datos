
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './layout.css';


const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/clientes', label: 'Clientes' },
  { to: '/menus', label: 'Menú' },
  { to: '/facturas', label: 'Facturas' },
  { to: '/detalle-facturas', label: 'Detalle Facturas' },
  { to: '/detalle-purchaseorders', label: 'Detalle Purchase Orders' },
  { to: '/empleados', label: 'Empleados' },
  { to: '/puestos', label: 'Puestos' },
  { to: '/ingrediente-menus', label: 'Ingrediente Menus' },
  { to: '/purchaseorders', label: 'Purchase Orders' },
  { to: '/storeingredientes', label: 'Store Ingredientes' },
  { to: '/vendedores', label: 'Vendedores' },
  { to: '/proveedores', label: 'Proveedores' }
];

const MainLayout = ({ children }) => {
  const location = useLocation();
  return (
    <div className="layout">
      <header className="layout-header">
        <h2>Sabor Tico</h2>
      </header>

      <nav className="layout-nav">
        {navLinks.map(link => (
          <Link
            key={link.to}
            to={link.to}
            className={location.pathname.startsWith(link.to) ? 'active' : ''}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <main className="layout-main">{children}</main>

      <footer className="layout-footer">
        <p>© 2025 Sabor Tico</p>
      </footer>
    </div>
  );
};

export default MainLayout;
