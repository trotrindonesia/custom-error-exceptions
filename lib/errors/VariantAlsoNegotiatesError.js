const CustomError = require('./CustomError');
const { codes, statusCodes, messages } = require('../constants');

/**
 * VariantAlsoNegotiatesError
 *
 * @class VariantAlsoNegotiatesError
 * @extends {CustomError}
 */
const VariantAlsoNegotiatesError = class extends CustomError {
  /**
   * constructor
   * @param  {string} message - custom error message
   */
  constructor(message) {
    super(
      message || messages.VARIANT_ALSO_NEGOTIATES,
      codes.VARIANT_ALSO_NEGOTIATES,
      statusCodes.VARIANT_ALSO_NEGOTIATES
    );
  }
};

module.exports = VariantAlsoNegotiatesError;