const CustomError = require('./CustomError');
const { codes, statusCodes, messages } = require('../constants');

/**
 * RequestTimeoutError
 *
 * @class RequestTimeoutError
 * @extends {CustomError}
 */
const RequestTimeoutError = class extends CustomError {
  /**
   * constructor
   * @param  {string} message - custom error message
   */
  constructor(message) {
    super(message || messages.REQUEST_TIMEOUT, codes.REQUEST_TIMEOUT, statusCodes.REQUEST_TIMEOUT);
  }
};

module.exports = RequestTimeoutError;