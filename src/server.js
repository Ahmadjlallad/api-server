const express = require("express");
const app = express();
const notFoundHandler = require("./error-handlers/404");
const errorHandler = require("./error-handlers/500");
const logger = require("./middleware/logger");
const foodRouter = require("./route/food.route");
const clothesRouter = require("./route/clothes.route");
app.use(express.json());
app.use(logger);

app.get("/", (_, res, next) => {
  res.send("welcome");
});

app.use("/food", foodRouter);
app.use("/clothes", clothesRouter);
app.use(errorHandler);
app.use("*", notFoundHandler);
const start = (port) => {
  app.listen(port, () => console.log(`listening to ${port}`));
};
module.exports = {
  app,
  start,
};
