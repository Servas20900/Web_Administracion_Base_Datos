// entity/Usuario.js
const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Usuario",
  tableName: "empleado",
  columns: {
    id_empleado: {
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
      nullable: false,
    },
    segundo_apellido: {
      type: "varchar2",
      length: 50,
      nullable: true,
    },
    id_puesto_fk: {
      type: "number",
      nullable: false,
    },
    salario: {
      type: "number",
      precision: 10,
      scale: 2,
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
    puesto: {
      target: "Puesto",
      type: "many-to-one",
      joinColumn: { name: "id_puesto_fk" },
      cascade: true,
    },
  },
});
