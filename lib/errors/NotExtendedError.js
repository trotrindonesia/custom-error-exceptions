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
    super(message || messages.NOT_EXTENDED, codes.NOT_EXTENDED, statusCodes.NOT_EXTENDED);
  }
};

module.exports = NotExtendedError;