const CustomError = require('./CustomError');
const { codes, statusCodes, messages } = require('../constants');

/**
 * UpgradeRequiredError
 *
 * @class UpgradeRequiredError
 * @extends {CustomError}
 */
const UpgradeRequiredError = class extends CustomError {
  /**
   * constructor
   * @param  {string} message - custom error message
   */
  constructor(message) {
    super(message || messages.BAD_REQUEST, codes.BAD_REQUEST, statusCodes.BAD_REQUEST);
  }
};

module.exports = UpgradeRequiredError;