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
    super(message || messages.BAD_REQUEST, codes.BAD_REQUEST, statusCodes.BAD_REQUEST);
  }
};

module.exports = GoneError;