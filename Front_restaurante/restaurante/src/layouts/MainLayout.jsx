
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './layout.css';


const navLinks = [
  { to: '/clientes', label: 'Clientes' },
  { to: '/menus', label: 'Menú' },
  { to: '/facturas', label: 'Facturas' },
  { to: '/empleados', label: 'Empleados' },
  { to: '/inventario', label: 'Inventario' },
  { to: '/proveedores', label: 'Proveedores' },
];

const MainLayout = ({ children }) => {
  const location = useLocation();
  return (
    <div className="layout">
      <header className="layout-header">
        <p>Sabor Tico</p>
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
