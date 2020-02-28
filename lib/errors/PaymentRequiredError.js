const CustomError = require('./CustomError');
const { codes, statusCodes, messages } = require('../constants');

/**
 * PaymentRequiredError
 *
 * @class PaymentRequiredError
 * @extends {CustomError}
 */
const PaymentRequiredError = class extends CustomError {
  /**
   * constructor
   * @param  {string} message - custom error message
   */
  constructor(message) {
    super(
      message || messages.PAYMENT_REQUIRED,
      codes.PAYMENT_REQUIRED,
      statusCodes.PAYMENT_REQUIRED
    );
  }
};

module.exports = PaymentRequiredError;