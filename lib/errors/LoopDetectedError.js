const CustomError = require('./CustomError');
const { codes, statusCodes, messages } = require('../constants');

/**
 * LoopDetectedError
 *
 * @class LoopDetectedError
 * @extends {CustomError}
 */
const LoopDetectedError = class extends CustomError {
  /**
   * constructor
   * @param  {string} message - custom error message
   */
  constructor(message) {
    super(message || messages.LOOP_DETECTED, codes.LOOP_DETECTED, statusCodes.LOOP_DETECTED);
  }
};

module.exports = LoopDetectedError;