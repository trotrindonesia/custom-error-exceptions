const CustomError = require('./CustomError');
const { codes, statusCodes, messages } = require('../constants');

/**
 * NetworkAuthenticationRequiredError
 *
 * @class NetworkAuthenticationRequiredError
 * @extends {CustomError}
 */
const NetworkAuthenticationRequiredError = class extends CustomError {
  /**
   * constructor
   * @param  {string} message - custom error message
   */
  constructor(message) {
    super(
      message || messages.NETWORK_AUTHENTICATION_REQUIRED,
      codes.NETWORK_AUTHENTICATION_REQUIRED,
      statusCodes.NETWORK_AUTHENTICATION_REQUIRED
    );
  }
};

module.exports = NetworkAuthenticationRequiredError;