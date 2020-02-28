const CustomError = require('./CustomError');
const { codes, statusCodes, messages } = require('../constants');

/**
 * ServiceUnavailableError
 *
 * @class ServiceUnavailableError
 * @extends {CustomError}
 */
const ServiceUnavailableError = class extends CustomError {
  /**
   * constructor
   * @param  {string} message - custom error message
   */
  constructor(message) {
    super(
      message || messages.SERVICE_UNAVAILABLE,
      codes.SERVICE_UNAVAILABLE,
      statusCodes.SERVICE_UNAVAILABLE
    );
  }
};

module.exports = ServiceUnavailableError;