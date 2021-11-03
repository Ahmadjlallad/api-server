const { Request, Response, NextFunction } = require("express");

/**
 * @function notFoundHandler
 * its a express middleware use to send a 404 and not found message
 * when the clint try to access a unknown route
 * @param   {ErrorEvent} err the first object of the request
 * @param   {Request} req the first object of the request
 * @param   {Response} _ the second object of the response
 * @param {NextFunction} next the third next function of express
 */
const notFoundHandler = (req, res) => {
  res.status(404).send("404 NOT FOUND");
};

module.exports = notFoundHandler;
