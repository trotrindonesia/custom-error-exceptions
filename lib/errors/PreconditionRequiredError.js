const CustomError = require('./CustomError');
const { codes, statusCodes, messages } = require('../constants');

/**
 * PreconditionRequiredError
 *
 * @class PreconditionRequiredError
 * @extends {CustomError}
 */
const PreconditionRequiredError = class extends CustomError {
  /**
   * constructor
   * @param  {string} message - custom error message
   */
  constructor(message) {
    super(
      message || messages.PRECONDITION_REQUIRED,
      codes.PRECONDITION_REQUIRED,
      statusCodes.PRECONDITION_REQUIRED
    );
  }
};

module.exports = PreconditionRequiredError;