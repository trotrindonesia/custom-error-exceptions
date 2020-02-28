const CustomError = require('./CustomError');
const { codes, statusCodes, messages } = require('../constants');

/**
 * ProxyAuthenticationError
 *
 * @class ProxyAuthenticationError
 * @extends {CustomError}
 */
const ProxyAuthenticationError = class extends CustomError {
  /**
   * constructor
   * @param  {string} message - custom error message
   */
  constructor(message) {
    super(
      message || messages.PROXY_AUTHENTICATION_REQUIRED,
      codes.PROXY_AUTHENTICATION_REQUIRED,
      statusCodes.PROXY_AUTHENTICATION_REQUIRED
    );
  }
};

module.exports = ProxyAuthenticationError;