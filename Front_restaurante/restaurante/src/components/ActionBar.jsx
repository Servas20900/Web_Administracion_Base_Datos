import React from 'react';
import './ActionBar.css';

const ActionBar = ({ onAdd, onUpdate, addLabel = 'Agregar', updateLabel = 'Actualizar' }) => (
  <div className="action-bar">
    <button className="action-btn add" onClick={onAdd}>{addLabel}</button>
    <button className="action-btn update" onClick={onUpdate}>{updateLabel}</button>
  </div>
);

export default ActionBar;
