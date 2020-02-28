const CustomError = require('./CustomError');
const { codes, statusCodes, messages } = require('../constants');

/**
 * HttpNotSupportedError
 *
 * @class HttpNotSupportedError
 * @extends {CustomError}
 */
const HttpNotSupportedError = class extends CustomError {
  /**
   * constructor
   * @param  {string} message - custom error message
   */
  constructor(message) {
    super(
      message || messages.HTTP_VERSION_NOT_SUPPORTED,
      codes.HTTP_VERSION_NOT_SUPPORTED,
      statusCodes.HTTP_VERSION_NOT_SUPPORTED
    );
  }
};

module.exports = HttpNotSupportedError;