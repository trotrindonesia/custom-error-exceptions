const CustomError = require('./CustomError');
const { codes, statusCodes, messages } = require('../constants');

/**
 * MisdirectedRequestError
 *
 * @class MisdirectedRequestError
 * @extends {CustomError}
 */
const MisdirectedRequestError = class extends CustomError {
  /**
   * constructor
   * @param  {string} message - custom error message
   */
  constructor(message) {
    super(
      message || messages.MISDIRECTED_REQUEST,
      codes.MISDIRECTED_REQUEST,
      statusCodes.MISDIRECTED_REQUEST
    );
  }
};

module.exports = MisdirectedRequestError;