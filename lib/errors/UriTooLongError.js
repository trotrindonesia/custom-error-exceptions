const CustomError = require('./CustomError');
const { codes, statusCodes, messages } = require('../constants');

/**
 * UriTooLongError
 *
 * @class UriTooLongError
 * @extends {CustomError}
 */
const UriTooLongError = class extends CustomError {
  /**
   * constructor
   * @param  {string} message - custom error message
   */
  constructor(message) {
    super(message || messages.URI_TOO_LONG, codes.URI_TOO_LONG, statusCodes.URI_TOO_LONG);
  }
};

module.exports = UriTooLongError;