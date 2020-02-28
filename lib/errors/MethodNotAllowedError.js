const CustomError = require('./CustomError');
const { codes, statusCodes, messages } = require('../constants');

/**
 * MethodNotAllowedError
 *
 * @class MethodNotAllowedError
 * @extends {CustomError}
 */
const MethodNotAllowedError = class extends CustomError {
  /**
   * constructor
   * @param  {string} message - custom error message
   */
  constructor(message) {
    super(
      message || messages.METHOD_NOT_ALLOWED,
      codes.METHOD_NOT_ALLOWED,
      statusCodes.METHOD_NOT_ALLOWED
    );
  }
};

module.exports = MethodNotAllowedError;
