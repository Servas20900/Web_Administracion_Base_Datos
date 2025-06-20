const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Cliente",
  tableName: "cliente",
  columns: {
    id_cliente: {
      primary: true,
      type: "number",
      generated: true,
    },
    nombre: {
      type: "varchar2",
      length: 50,
      nullable: false,
    },
    primer_apellido: {
      type: "varchar2",
      length: 50,
      nullable: true,
    },
    segundo_apellido: {
      type: "varchar2",
      length: 50,
      nullable: true,
    },
    telefono: {
      type: "varchar2",
      length: 8,
      nullable: true,
    },
    email: {
      type: "varchar2",
      length: 100,
      nullable: true,
    },
  },
  relations: {
    facturas: {
      type: "one-to-many",
      target: "Factura",
      inverseSide: "cliente"
    }
  }
});
