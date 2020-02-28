const CustomError = require('./CustomError');
const { codes, statusCodes, messages } = require('../constants');

/**
 * NotExtendedError
 *
 * @class NotExtendedError
 * @extends {CustomError}
 */
const NotExtendedError = class extends CustomError {
  /**
   * constructor
   * @param  {string} message - custom error message
   */
  constructor(message) {
    super(message || messages.BAD_REQUEST, codes.BAD_REQUEST, statusCodes.BAD_REQUEST);
  }
};

module.exports = NotExtendedError;