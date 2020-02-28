const CustomError = require('./CustomError');
const { codes, statusCodes, messages } = require('../constants');

/**
 * RangeNotSatisfiableError
 *
 * @class RangeNotSatisfiableError
 * @extends {CustomError}
 */
const RangeNotSatisfiableError = class extends CustomError {
  /**
   * constructor
   * @param  {string} message - custom error message
   */
  constructor(message) {
    super(
      message || messages.RANGE_NOT_SATISFIABLE,
      codes.RANGE_NOT_SATISFIABLE,
      statusCodes.RANGE_NOT_SATISFIABLE
    );
  }
};

module.exports = RangeNotSatisfiableError;