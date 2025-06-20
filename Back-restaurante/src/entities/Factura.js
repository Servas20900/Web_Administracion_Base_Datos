const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Factura",
  tableName: "factura",
  columns: {
    id_factura: {
      primary: true,
      type: "number",
      generated: true,
    },
    id_cliente_fk: {
      type: "number",
      nullable: false,
    },
    id_empleado_fk: {
      type: "number",
      nullable: false,
    },
    fecha: {
      type: "date",
      nullable: true,
    },
    estado: {
      type: "varchar2",
      length: 10,
      nullable: true,
    },
  },
  relations: {
    cliente: {
      type: "many-to-one",
      target: "Cliente",
      joinColumn: {
        name: "id_cliente_fk",
        referencedColumnName: "id_cliente"
      }
    },
    empleado: {
      type: "many-to-one",
      target: "Usuario",
      joinColumn: {
        name: "id_empleado_fk",
        referencedColumnName: "id_empleado"
      }
    },
    detalles: {
      type: "one-to-many",
      target: "DetalleFactura",
      inverseSide: "factura"
    }
  }
});
