const CustomError = require('./CustomError');
const { codes, statusCodes, messages } = require('../constants');

/**
 * UnsupportedMediaTypeError
 *
 * @class UnsupportedMediaTypeError
 * @extends {CustomError}
 */
const UnsupportedMediaTypeError = class extends CustomError {
  /**
   * constructor
   * @param  {string} message - custom error message
   */
  constructor(message) {
    super(
      message || messages.UNSUPPORTED_MEDIA_TYPE,
      codes.UNSUPPORTED_MEDIA_TYPE,
      statusCodes.UNSUPPORTED_MEDIA_TYPE
    );
  }
};

module.exports = UnsupportedMediaTypeError;