const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "DetallePurchaseOrder",
  tableName: "detalle_purchase_order",
  columns: {
    id_detalle_po: {
      primary: true,
      type: "number",
      generated: true,
    },
    id_po_fk: {
      type: "number",
      nullable: false,
    },
    id_ingrediente_fk: {
      type: "number",
      nullable: false,
    },
    precio: {
      type: "number",
      precision: 10,
      scale: 2,
      nullable: true,
    },
    cantidad: {
      type: "number",
      nullable: true,
    },
  },
  relations: {
    purchaseOrder: {
      type: "many-to-one",
      target: "PurchaseOrder",
      joinColumn: {
        name: "id_po_fk",
        referencedColumnName: "id_po"
      }
    },
    ingrediente: {
      type: "many-to-one",
      target: "StoreIngrediente",
      joinColumn: {
        name: "id_ingrediente_fk",
        referencedColumnName: "id_ingrediente"
      }
    }
  }
});
