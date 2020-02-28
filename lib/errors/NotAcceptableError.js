const CustomError = require('./CustomError');
const { codes, statusCodes, messages } = require('../constants');

/**
 * NotAcceptableError
 *
 * @class NotAcceptableError
 * @extends {CustomError}
 */
const NotAcceptableError = class extends CustomError {
  /**
   * constructor
   * @param  {string} message - custom error message
   */
  constructor(message) {
    super(message || messages.NOT_ACCEPTABLE, codes.NOT_ACCEPTABLE, statusCodes.NOT_ACCEPTABLE);
  }
};

module.exports = NotAcceptableError;