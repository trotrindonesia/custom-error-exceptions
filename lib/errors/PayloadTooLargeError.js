const CustomError = require('./CustomError');
const { codes, statusCodes, messages } = require('../constants');

/**
 * PayloadTooLargeError
 *
 * @class PayloadTooLargeError
 * @extends {CustomError}
 */
const PayloadTooLargeError = class extends CustomError {
  /**
   * constructor
   * @param  {string} message - custom error message
   */
  constructor(message) {
    super(
      message || messages.PAYLOAD_TOO_LARGE,
      codes.PAYLOAD_TOO_LARGE,
      statusCodes.PAYLOAD_TOO_LARGE
    );
  }
};

module.exports = PayloadTooLargeError;