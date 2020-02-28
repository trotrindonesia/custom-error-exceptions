const _ = require('lodash');

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
    console.log(err);
    res.status(err.statusCode).send({
      ..._.pick(err, ['statusCode', 'code', 'message'])
    });
  } else {
    console.log(err);
    res.status(500).send(err);
  }
  return next();
};

module.exports = errorHandler;
