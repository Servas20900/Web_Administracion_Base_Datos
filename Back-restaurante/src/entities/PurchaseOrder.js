const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "PurchaseOrder",
  tableName: "purchase_order",
  columns: {
    id_po: {
      primary: true,
      type: "number",
      generated: true,
    },
    id_vendor_fk: {
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
    vendor: {
      type: "many-to-one",
      target: "Vendor",
      joinColumn: {
        name: "id_vendor_fk",
        referencedColumnName: "id_vendor"
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
      target: "DetallePurchaseOrder",
      inverseSide: "purchaseOrder"
    }
  }
});
