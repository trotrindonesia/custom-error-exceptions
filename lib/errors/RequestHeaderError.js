const CustomError = require('./CustomError');
const { codes, statusCodes, messages } = require('../constants');

/**
 * RequestHeaderError
 *
 * @class RequestHeaderError
 * @extends {CustomError}
 */
const RequestHeaderError = class extends CustomError {
  /**
   * constructor
   * @param  {string} message - custom error message
   */
  constructor(message) {
    super(
      message || messages.REQUEST_HEADER_FIELDS_TOO_LARGE,
      codes.REQUEST_HEADER_FIELDS_TOO_LARGE,
      statusCodes.REQUEST_HEADER_FIELDS_TOO_LARGE
    );
  }
};

module.exports = RequestHeaderError;