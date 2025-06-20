const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "DetalleFactura",
  tableName: "detalle_factura",
  columns: {
    id_detalle_factura: {
      primary: true,
      type: "number",
      generated: true,
    },
    id_factura_fk: {
      type: "number",
      nullable: false,
    },
    id_platillo_fk: {
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
    factura: {
      type: "many-to-one",
      target: "Factura",
      joinColumn: {
        name: "id_factura_fk",
        referencedColumnName: "id_factura"
      }
    },
    platillo: {
      type: "many-to-one",
      target: "Menu",
      joinColumn: {
        name: "id_platillo_fk",
        referencedColumnName: "id_platillo"
      }
    }
  }
});
