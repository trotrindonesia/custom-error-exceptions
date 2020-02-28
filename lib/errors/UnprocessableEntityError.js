const CustomError = require('./CustomError');
const { codes, statusCodes, messages } = require('../constants');

/**
 * UnprocessableEntityError
 *
 * @class UnprocessableEntityError
 * @extends {CustomError}
 */
const UnprocessableEntityError = class extends CustomError {
  /**
   * constructor
   * @param  {string} message - custom error message
   */
  constructor(message) {
    super(
      message || messages.UNPROCESSABLE_ENTITY,
      codes.UNPROCESSABLE_ENTITY,
      statusCodes.UNPROCESSABLE_ENTITY
    );
  }
};

module.exports = UnprocessableEntityError;