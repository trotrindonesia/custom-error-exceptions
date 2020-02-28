const CustomError = require('./CustomError');
const { codes, statusCodes, messages } = require('../constants');

/**
 * GoneError
 *
 * @class GoneError
 * @extends {CustomError}
 */
const GoneError = class extends CustomError {
  /**
   * constructor
   * @param  {string} message - custom error message
   */
  constructor(message) {
    super(message || messages.GONE, codes.GONE, statusCodes.GONE);
  }
};

module.exports = GoneError;