const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Menu",
  tableName: "menu",
  columns: {
    id_platillo: {
      primary: true,
      type: "number",
      generated: true,
    },
    nombre_platillo: {
      type: "varchar2",
      length: 50,
      nullable: false,
    },
    precio: {
      type: "number",
      precision: 10,
      scale: 2,
      nullable: true,
    },
    descripcion: {
      type: "varchar2",
      length: 255,
      nullable: true,
    },
  },
  relations: {
    ingredientes: {
      type: "one-to-many",
      target: "IngredienteMenu",
      inverseSide: "platillo"
    },
    detallesFactura: {
      type: "one-to-many",
      target: "DetalleFactura",
      inverseSide: "platillo"
    }
  }
});
