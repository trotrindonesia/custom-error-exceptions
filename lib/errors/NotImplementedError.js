const CustomError = require('./CustomError');
const { codes, statusCodes, messages } = require('../constants');

/**
 * NotImplementedError
 *
 * @class NotImplementedError
 * @extends {CustomError}
 */
const NotImplementedError = class extends CustomError {
  /**
   * constructor
   * @param  {string} message - custom error message
   */
  constructor(message) {
    super(message || messages.NOT_IMPLEMENTED, codes.NOT_IMPLEMENTED, statusCodes.NOT_IMPLEMENTED);
  }
};

module.exports = NotImplementedError;