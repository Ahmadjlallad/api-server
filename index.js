require("dotenv").config();
const { start } = require("./src/server");
const PORT = process.env.PORT || 3000;
const { db } = require("./src/models/index");
// * NOTE first we connect to data base then we connect to server

db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
db.sync()
  .then(() => {
    start(PORT);
  })
  .catch((err) => {
    console.log(err);
  });
