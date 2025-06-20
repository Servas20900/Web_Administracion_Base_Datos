-- Crear esquema (si estás usando SQL Developer no se puede crear "database", se trabaja en un schema)
-- Asegurate de estar logueado en el usuario correcto (ej: restaurante / SYSTEM / HR, etc.)

-- CREACIÓN DE TABLAS

-- CLIENTE
CREATE TABLE cliente (
	id_cliente NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nombre VARCHAR2(50) NOT NULL,
    primer_apellido VARCHAR2(50),
    segundo_apellido VARCHAR2(50),
    telefono VARCHAR2(8),
	email VARCHAR2(100)
);

-- PUESTO
CREATE TABLE puesto (
	id_puesto NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nombre_puesto VARCHAR2(50) NOT NULL,
	descripcion VARCHAR2(255)
);

-- EMPLEADO
CREATE TABLE empleado (
	id_empleado NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	nombre VARCHAR2(50) NOT NULL,
    primer_apellido VARCHAR2(50) NOT NULL,
    segundo_apellido VARCHAR2(50),
	id_puesto_fk NUMBER NOT NULL,
    salario NUMBER(10,2),
	telefono VARCHAR2(8),
	email VARCHAR2(100),
	CONSTRAINT fk_empleado_puesto FOREIGN KEY (id_puesto_fk) REFERENCES puesto(id_puesto)
);

-- MENU
CREATE TABLE menu (
	id_platillo NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nombre_platillo VARCHAR2(50) NOT NULL,
	precio NUMBER(10,2),
	descripcion VARCHAR2(255)
);

-- INGREDIENTE / INVENTARIO
CREATE TABLE store_ingrediente (
	id_ingrediente NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nombre_ingrediente VARCHAR2(50) NOT NULL,
	cantidad NUMBER NOT NULL
);

-- INGREDIENTES DE CADA PLATILLO
CREATE TABLE ingrediente_menu (
	id_platillo_fk NUMBER NOT NULL,
	id_ingrediente_fk NUMBER NOT NULL,
	cantidad_utilizada NUMBER,
	CONSTRAINT fk_ingmenu_platillo FOREIGN KEY (id_platillo_fk) REFERENCES menu(id_platillo),
	CONSTRAINT fk_ingmenu_ingrediente FOREIGN KEY (id_ingrediente_fk) REFERENCES store_ingrediente(id_ingrediente)
);

-- VENDOR (PROVEEDORES)
CREATE TABLE vendor (
	id_vendor NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nombre_proveedor VARCHAR2(50) NOT NULL,
	telefono VARCHAR2(8),
	email VARCHAR2(100)
);

-- FACTURA
CREATE TABLE factura (
	id_factura NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	id_cliente_fk NUMBER NOT NULL,
	id_empleado_fk NUMBER NOT NULL,
	fecha DATE,
	estado VARCHAR2(10),
	CONSTRAINT fk_factura_cliente FOREIGN KEY (id_cliente_fk) REFERENCES cliente(id_cliente),
	CONSTRAINT fk_factura_empleado FOREIGN KEY (id_empleado_fk) REFERENCES empleado(id_empleado)
);

-- DETALLE FACTURA
CREATE TABLE detalle_factura (
	id_detalle_factura NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	id_factura_fk NUMBER NOT NULL,
	id_platillo_fk NUMBER NOT NULL,
    precio NUMBER(10,2),
	cantidad NUMBER,
	CONSTRAINT fk_detalle_factura FOREIGN KEY (id_factura_fk) REFERENCES factura(id_factura),
	CONSTRAINT fk_detalle_platillo FOREIGN KEY (id_platillo_fk) REFERENCES menu(id_platillo)
);

-- PURCHASE ORDER
CREATE TABLE purchase_order (
	id_po NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	id_vendor_fk NUMBER NOT NULL,
	id_empleado_fk NUMBER NOT NULL,
    fecha DATE,
	estado VARCHAR2(10),
	CONSTRAINT fk_po_vendor FOREIGN KEY (id_vendor_fk) REFERENCES vendor(id_vendor),
	CONSTRAINT fk_po_empleado FOREIGN KEY (id_empleado_fk) REFERENCES empleado(id_empleado)
);

-- DETALLE PURCHASE ORDER
CREATE TABLE detalle_purchase_order (
	id_detalle_po NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	id_po_fk NUMBER NOT NULL,
	id_ingrediente_fk NUMBER NOT NULL,
    precio NUMBER(10,2),
	cantidad NUMBER,
	CONSTRAINT fk_dpo_po FOREIGN KEY (id_po_fk) REFERENCES purchase_order(id_po),
	CONSTRAINT fk_dpo_ing FOREIGN KEY (id_ingrediente_fk) REFERENCES store_ingrediente(id_ingrediente)
);