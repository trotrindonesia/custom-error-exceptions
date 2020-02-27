const { codes, statusCodes, messages } = require('../constants');

class CustomError extends Error {
  constructor(
    message = messages.INTERNAL_SERVER_ERROR,
    code = codes.INTERNAL_SERVER_ERROR,
    statusCode = statusCodes.INTERNAL_SERVER_ERROR
  ) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
    this.code = code;
    this.statusCode = statusCode;
    this.message = message;
  }
}

module.exports = CustomError;