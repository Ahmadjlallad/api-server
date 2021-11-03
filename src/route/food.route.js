const express = require("express");
const foodRoute = express.Router();
const { Food } = require("../models/index");
// const Food = undefined;
foodRoute.get("/", async (req, res, next) => {
  try {
    const allFood = await Food.read(undefined, next);
    res.send(allFood);
  } catch (err) {
    next(err);
  }
});

foodRoute.post("/", async (req, res, next) => {
  try {
    const newFood = await Food.create(req.body, next);
    res.status(201).json(newFood);
  } catch (err) {
    next(err);
  }
});
foodRoute
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      const singleFood = await Food.read(req.params.id, next);
      res.send(singleFood);
    } catch (err) {
      next(err);
    }
  })
  .delete(async (req, res, next) => {
    try {
      const deletedFood = await Food.delete(req.params.id, next);
      res.status(204).json(deletedFood);
    } catch (err) {
      next(err);
    }
  })
  .put(async (req, res, next) => {
    try {
      const updatedFood = await Food.update(req.params.id, req.body, next);
      res.status(201).json(updatedFood);
    } catch (err) {
      next(err);
    }
  });
module.exports = foodRoute;
