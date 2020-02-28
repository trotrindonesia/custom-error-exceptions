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
    super(
      message || messages.UPGRADE_REQUIRED,
      codes.UPGRADE_REQUIRED,
      statusCodes.UPGRADE_REQUIRED
    );
  }
};

module.exports = UpgradeRequiredError;