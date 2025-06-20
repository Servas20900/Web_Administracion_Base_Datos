const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Puesto",
  tableName: "puesto",
  columns: {
    id_puesto: {
      primary: true,
      type: "number",
      generated: true,
    },
    nombre_puesto: {
      type: "varchar2",
      length: 50,
      nullable: false,
    },
    descripcion: {
      type: "varchar2",
      length: 255,
      nullable: true,
    },
  },
  relations: {
    empleados: {
      type: "one-to-many",
      target: "Usuario",
      inverseSide: "puesto",
      joinColumn: {
        name: "id_puesto",
        referencedColumnName: "id_puesto_fk"
      }
    }
  }
});
