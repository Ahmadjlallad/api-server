const { Request, Response, NextFunction } = require("express");

/**
 * @function errorHandler
 * express middleware handel the error if the user did a mistake or cues any problem
 * @param   {ErrorEvent} err the first object of the request
 * @param   {Request} req the first object of the request
 * @param   {Response} _ the second object of the response
 * @param {NextFunction} next the third next function of express
 */
const errorHandler = (err, _, res, next) => {
  if (err) {
    res.status(500).json({
      status: 500,
      errMessage: err.message,
    });
  } else next();
};
module.exports = errorHandler;
