const CustomError = require('./CustomError');
const { codes, statusCodes, messages } = require('../constants');

/**
 * TooEarlyError
 *
 * @class TooEarlyError
 * @extends {CustomError}
 */
const TooEarlyError = class extends CustomError {
  /**
   * constructor
   * @param  {string} message - custom error message
   */
  constructor(message) {
    super(message || messages.TOO_EARLY, codes.TOO_EARLY, statusCodes.TOO_EARLY);
  }
};

module.exports = TooEarlyError;