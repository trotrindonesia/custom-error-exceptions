const CustomError = require('./CustomError');
const { codes, statusCodes, messages } = require('../constants');

/**
 * FailedDependencyError
 *
 * @class FailedDependencyError
 * @extends {CustomError}
 */
const FailedDependencyError = class extends CustomError {
  /**
   * constructor
   * @param  {string} message - custom error message
   */
  constructor(message) {
    super(
      message || messages.FAILED_DEPENDENCY,
      codes.FAILED_DEPENDENCY,
      statusCodes.FAILED_DEPENDENCY
    );
  }
};

module.exports = FailedDependencyError;