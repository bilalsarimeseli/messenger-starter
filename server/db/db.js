const Sequelize = require("sequelize");

const db = new Sequelize(process.env.DATABASE_URL || "postgres://postgres:2002101174postgres@localhost:5432/messengerapp", {
  logging: false
});

db.authenticate().then(function(errors) {console.log(errors)});

module.exports = db;
