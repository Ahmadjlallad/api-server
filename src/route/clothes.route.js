const express = require("express");
const clothesRoute = express.Router();
const { Clothes } = require("../models/index");
// const Clothes = undefined;
clothesRoute.get("/", async (req, res, next) => {
  try {
    const allClothes = await Clothes.read(undefined, next);
    res.send(allClothes);
  } catch (err) {
    next(err);
  }
});

clothesRoute.post("/", async (req, res, next) => {
  try {
    const newClothes = await Clothes.create(req.body, next);
    res.status(201).json(newClothes);
  } catch (err) {
    next(err);
  }
});
clothesRoute
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      const singleClothes = await Clothes.read(req.params.id, next);
      res.send(singleClothes);
    } catch (err) {
      next(err);
    }
  })
  .delete(async (req, res, next) => {
    try {
      const deletedClothes = await Clothes.delete(req.params.id, next);
      res.status(204).json(deletedClothes);
    } catch (err) {
      next(err);
    }
  })
  .put(async (req, res, next) => {
    try {
      const updatedClothes = await Clothes.update(
        req.params.id,
        req.body,
        next
      );
      res.status(201).json(updatedClothes);
    } catch (err) {
      next(err);
    }
  });
module.exports = clothesRoute;
