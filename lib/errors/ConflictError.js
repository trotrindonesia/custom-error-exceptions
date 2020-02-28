const CustomError = require('./CustomError');
const { codes, statusCodes, messages } = require('../constants');

/**
 * ConflictError
 *
 * @class ConflictError
 * @extends {CustomError}
 */
const ConflictError = class extends CustomError {
  /**
   * constructor
   * @param  {string} message - custom error message
   */
  constructor(message) {
    super(message || messages.CONFLICT, codes.CONFLICT, statusCodes.CONFLICT);
  }
};

module.exports = ConflictError;
