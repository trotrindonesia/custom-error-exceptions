const CustomError = require('./CustomError');
const { codes, statusCodes, messages } = require('../constants');

/**
 * NotFoundError
 *
 * @class NotFoundError
 * @extends {CustomError}
 */
const NotFoundError = class extends CustomError {
  /**
   * constructor
   * @param  {string} message - custom error message
   */
  constructor(message) {
    super(message || messages.NOT_FOUND, codes.NOT_FOUND, statusCodes.NOT_FOUND);
  }
};

module.exports = NotFoundError;