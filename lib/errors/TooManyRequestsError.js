const CustomError = require('./CustomError');
const { codes, statusCodes, messages } = require('../constants');

/**
 * TooManyRequestsError
 *
 * @class TooManyRequestsError
 * @extends {CustomError}
 */
const TooManyRequestsError = class extends CustomError {
  /**
   * constructor
   * @param  {string} message - custom error message
   */
  constructor(message) {
    super(
      message || messages.TOO_MANY_REQUESTS,
      codes.TOO_MANY_REQUESTS,
      statusCodes.TOO_MANY_REQUESTS
    );
  }
};

module.exports = TooManyRequestsError;