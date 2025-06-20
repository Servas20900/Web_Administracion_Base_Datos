const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "StoreIngrediente",
  tableName: "store_ingrediente",
  columns: {
    id_ingrediente: {
      primary: true,
      type: "number",
      generated: true,
    },
    nombre_ingrediente: {
      type: "varchar2",
      length: 50,
      nullable: false,
    },
    cantidad: {
      type: "number",
      nullable: false,
    },
  },
  relations: {
    ingredientesMenu: {
      type: "one-to-many",
      target: "IngredienteMenu",
      inverseSide: "ingrediente"
    },
    detallesPurchaseOrder: {
      type: "one-to-many",
      target: "DetallePurchaseOrder",
      inverseSide: "ingrediente"
    }
  }
});
