const CustomError = require('./CustomError');
const { codes, statusCodes, messages } = require('../constants');

/**
 * BadGatewayError
 *
 * @class BadGatewayError
 * @extends {CustomError}
 */
const BadGatewayError = class extends CustomError {
  /**
   * constructor
   * @param  {string} message - custom error message
   */
  constructor(message) {
    super(message || messages.BAD_GATEWAY, codes.BAD_GATEWAY, statusCodes.BAD_GATEWAY);
  }
};

module.exports = BadGatewayError;