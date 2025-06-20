const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Vendor",
  tableName: "vendor",
  columns: {
    id_vendor: {
      primary: true,
      type: "number",
      generated: true,
    },
    nombre_proveedor: {
      type: "varchar2",
      length: 50,
      nullable: false,
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
    purchaseOrders: {
      type: "one-to-many",
      target: "PurchaseOrder",
      inverseSide: "vendor"
    }
  }
});
