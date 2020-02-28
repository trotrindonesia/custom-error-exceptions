const CustomError = require('./CustomError');
const { codes, statusCodes, messages } = require('../constants');

/**
 * LegalReasonsError
 *
 * @class LegalReasonsError
 * @extends {CustomError}
 */
const LegalReasonsError = class extends CustomError {
  /**
   * constructor
   * @param  {string} message - custom error message
   */
  constructor(message) {
    super(
      message || messages.UNAVAILABLE_FOR_LEGAL_REASONS,
      codes.UNAVAILABLE_FOR_LEGAL_REASONS,
      statusCodes.UNAVAILABLE_FOR_LEGAL_REASONS
    );
  }
};

module.exports = LegalReasonsError;