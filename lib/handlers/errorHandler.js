const _ = require('lodash');
const { errorLogger } = require('../logger')

/**
 * error handler function
 * @param  {object}   err  http exception
 * @param  {object}   req  incoming request
 * @param  {object}   res  response object
 * @param  {function} next next function
 * @returns {object}        whatever "next" returns
 */
const errorHandler = (err, req, res, next) => {
  if (err.isCustomError) {
    res.status(err.statusCode).send({
      ..._.pick(err, ['statusCode', 'code', 'message'])
    });
  } else {
    res.status(500).send(err);
  }
  errorLogger(err, req, res);
  return next();
};

module.exports = errorHandler;
