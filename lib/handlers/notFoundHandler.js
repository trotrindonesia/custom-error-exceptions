
const { NotFoundError } = require('../errors')

/**
 * not found handler function
 * @param  {object}   req  incoming request
 * @param  {object}   res  response object
 * @param  {function} next next function
 * @returns {object} whatever "next" returns
 */
const notFoundHandler = (req, res, next) => {
  if (!req.route) {
    throw new NotFoundError('Page you\'re request not found');
  }
  next();
};

module.exports = notFoundHandler;