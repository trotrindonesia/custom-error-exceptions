const CustomError = require('./CustomError');
const { codes, statusCodes, messages } = require('../constants');

/**
 * InternalServerError
 *
 * @class InternalServerError
 * @extends {CustomError}
 */
const InternalServerError = class extends CustomError {
  /**
   * constructor
   * @param  {string} message - custom error message
   */
  constructor(message) {
    super(
      message || messages.INTERNAL_SERVER_ERROR,
      codes.INTERNAL_SERVER_ERROR,
      statusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

module.exports = InternalServerError;