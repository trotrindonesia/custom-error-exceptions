const CustomError = require('./CustomError');
const { codes, statusCodes, messages } = require('../constants');

/**
 * LockedError
 *
 * @class LockedError
 * @extends {CustomError}
 */
const LockedError = class extends CustomError {
  /**
   * constructor
   * @param  {string} message - custom error message
   */
  constructor(message) {
    super(message || messages.LOCKED, codes.LOCKED, statusCodes.LOCKED);
  }
};

module.exports = LockedError;