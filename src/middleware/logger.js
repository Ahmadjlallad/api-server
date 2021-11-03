const { Request, Response, NextFunction } = require("express");
/**
 * @function logger
 * logger is a express middleware function use to log on every request
 * log time of the request
 * PATH, METHOD, BODY if present and query if there is query presented
 * @param   {Request} req the first object of the request
 * @param   {Response} _ the second object of the response
 * @param {NextFunction} next the third next function of express
 */
const logger = (req, _, next) => {
  const time = new Date();
  console.log(
    `LOG AT: ${time.getHours()}:${time.getMinutes()}\nPATH: ${
      req.path
    }\nMETHOD: ${req.method}\nbody?: ${
      req.method === "GET" ? null : JSON.stringify(req.body)
    }\nquery?: ${JSON.stringify(req.query)}`
  );
  next();
};

module.exports = logger;
