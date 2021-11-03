const { Request, Response, NextFunction } = require("express");
/**
 * @function validate
 * a middleware function of express
 * validate if the request object has a property named 'name' on the query object
 * Takes 3 armaments
 * @param   {Request} req the first object of the request
 * @param   {Response} res the second object of the response
 * @param {NextFunction} next the third next function of express
 */
const validate = (req, res, next) => {
  if (req.query.name) next();
  else next(new Error(`must attach the "name" query`));
};

module.exports = validate;
