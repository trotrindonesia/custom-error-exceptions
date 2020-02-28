const CustomError = require('./CustomError');
const { codes, statusCodes, messages } = require('../constants');

/**
 * BadRequestError
 *
 * @class BadRequestError
 * @extends {CustomError}
 */
const BadRequestError = class extends CustomError {
  /**
   * constructor
   * @param  {string} message - custom error message
   */
  constructor(message) {
    super(message || messages.BAD_REQUEST, codes.BAD_REQUEST, statusCodes.BAD_REQUEST);
  }
};

module.exports = BadRequestError;