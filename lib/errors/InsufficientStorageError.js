const CustomError = require('./CustomError');
const { codes, statusCodes, messages } = require('../constants');

/**
 * InsufficientStorageError
 *
 * @class InsufficientStorageError
 * @extends {CustomError}
 */
const InsufficientStorageError = class extends CustomError {
  /**
   * constructor
   * @param  {string} message - custom error message
   */
  constructor(message) {
    super(
      message || messages.INSUFFICIENT_STORAGE,
      codes.INSUFFICIENT_STORAGE,
      statusCodes.INSUFFICIENT_STORAGE
    );
  }
};

module.exports = InsufficientStorageError;