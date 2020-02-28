const CustomError = require('./CustomError');
const { codes, statusCodes, messages } = require('../constants');

/**
 * PreconditionFailedError
 *
 * @class PreconditionFailedError
 * @extends {CustomError}
 */
const PreconditionFailedError = class extends CustomError {
  /**
   * constructor
   * @param  {string} message - custom error message
   */
  constructor(message) {
    super(
      message || messages.PRECONDITION_FAILED,
      codes.PRECONDITION_FAILED,
      statusCodes.PRECONDITION_FAILED
    );
  }
};

module.exports = PreconditionFailedError;