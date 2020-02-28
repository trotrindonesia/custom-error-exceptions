const CustomError = require('./CustomError');
const { codes, statusCodes, messages } = require('../constants');

/**
 * LengthRequiredError
 *
 * @class LengthRequiredError
 * @extends {CustomError}
 */
const LengthRequiredError = class extends CustomError {
  /**
   * constructor
   * @param  {string} message - custom error message
   */
  constructor(message) {
    super(message || messages.LENGTH_REQUIRED, codes.LENGTH_REQUIRED, statusCodes.LENGTH_REQUIRED);
  }
};

module.exports = LengthRequiredError;