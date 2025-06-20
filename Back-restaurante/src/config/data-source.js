const { DataSource } = require("typeorm");
require("dotenv").config();
console.log("Conexión con Oracle:", {
  user: process.env.ORACLE_USER,
  password: process.env.ORACLE_PASSWORD,
  connectString: `${process.env.ORACLE_HOST}:${process.env.ORACLE_PORT}/${process.env.ORACLE_SERVICE}`,
});

const AppDataSource = new DataSource({
  type: "oracle",
  username: process.env.ORACLE_USER,
  password: process.env.ORACLE_PASSWORD,
  connectString: `${process.env.ORACLE_HOST}:${process.env.ORACLE_PORT}/${process.env.ORACLE_SERVICE}`,
  logging: true,
  entities: [require("../entities/Usuario"), require("../entities/Puesto")],
});

module.exports = { AppDataSource };
