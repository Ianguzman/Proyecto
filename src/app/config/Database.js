const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("LNSol", "postgres", "12345", {
  host: "localhost", 
  dialect: "postgres",
  logging: false, // Para evitar logs innecesarios
});

sequelize.sync() // Sincroniza los modelos con la BD
  .then(() => console.log("Base de datos sincronizada"))
  .catch(err => console.error("Error al sincronizar:", err));

module.exports = sequelize;
