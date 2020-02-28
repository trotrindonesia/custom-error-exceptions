const CustomError = require('./CustomError');
const { codes, statusCodes, messages } = require('../constants');

/**
 * GatewayTimeoutError
 *
 * @class GatewayTimeoutError
 * @extends {CustomError}
 */
const GatewayTimeoutError = class extends CustomError {
  /**
   * constructor
   * @param  {string} message - custom error message
   */
  constructor(message) {
    super(message || messages.GATEWAY_TIMEOUT, codes.GATEWAY_TIMEOUT, statusCodes.GATEWAY_TIMEOUT);
  }
};

module.exports = GatewayTimeoutError;