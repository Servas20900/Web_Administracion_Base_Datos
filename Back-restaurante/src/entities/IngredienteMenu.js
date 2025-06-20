const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "IngredienteMenu",
  tableName: "ingrediente_menu",
  columns: {
    id_platillo_fk: {
      primary: true,
      type: "number",
    },
    id_ingrediente_fk: {
      primary: true,
      type: "number",
    },
    cantidad_utilizada: {
      type: "number",
      nullable: true,
    },
  },
  relations: {
    platillo: {
      type: "many-to-one",
      target: "Menu",
      joinColumn: {
        name: "id_platillo_fk",
        referencedColumnName: "id_platillo"
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
