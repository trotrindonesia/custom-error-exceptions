
const { NotFoundError } = require('../errors')

const notFoundHandler = (req, res, next) => {
  if (!req.route) {
    throw new NotFoundError('Page you\'re request not found');
  }
  next();
};

module.exports = notFoundHandler;