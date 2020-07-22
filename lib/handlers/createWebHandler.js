const {
  errorLogger
} = require('../logger');
/**
 * create web handler function
 * @param  {function} handler  logic handler to be executed
 * @returns {object} whatever "next" returns
 */
const createWebHandler = (handler) => {
  let response;
  response = async (req, res) => {
    try {
      await handler(req, res);
    } catch (err) {
      if (!err.statusCode) {
        errorLogger(err, req, res);
        response = res.status(500).send({
          code: 500,
          statusCode: 'INTERNAL_SERVER_ERROR',
          message: err.message
        });
      }
      response = res.status(err.statusCode).send({
        code: err.code,
        statusCode: err.statusCode,
        message: err.message
      });
    }
  };
  return response;
};

module.exports = createWebHandler;
