const { codes, statusCodes } = require('../../lib/constants');
const { errorLogger } = require('../logger');
/**
 * create handler function
 * @param  {function} handler  logic handler to be executed
 * @returns {object} whatever "next" returns
 */
const createHandler = (handler) => {
  return async (req, res, next) => {
    let error;
    try {
      await handler(req, res);
    } catch (err) {
      error = err;
      if (!err.statusCode) {
        errorLogger(err, req, res);
        return res.status(statusCodes.INTERNAL_SERVER_ERROR).send({
          code: statusCodes.INTERNAL_SERVER_ERROR,
          statusCode: codes.INTERNAL_SERVER_ERROR,
          message: err.message ? err.message : 'Unhandled Exception'
        });
      }
      return res.status(err.statusCode).send({
        code: err.code,
        statusCode: err.statusCode,
        message: err.message,
      });
    }
    return next(error);
  };
};

module.exports = createHandler;
