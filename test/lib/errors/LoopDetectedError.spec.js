const { expect } = require('chai');
const { codes, statusCodes, messages } = require('../../../lib/constants');
const { LoopDetectedError } = require('../../../lib/errors');

describe('LoopDetectedError', () => {
  const defaultMsg = messages.LOOP_DETECTED;
  const defaultCode = codes.LOOP_DETECTED;
  const customMsg = 'Something bad happened';
  const statusCode = statusCodes.LOOP_DETECTED;

  it('should have default error message', () => {
    const err = new LoopDetectedError();
    expect(err.message).to.equal(defaultMsg);
  });

  it('should have default error code', () => {
    const err = new LoopDetectedError();
    expect(err.code).to.equal(defaultCode);
  });

  it('should have custom error message', () => {
    const err = new LoopDetectedError(customMsg);
    expect(err.message).to.equal(customMsg);
  });

  it('should have error statusCode', () => {
    const err = new LoopDetectedError();
    expect(err.statusCode).to.equal(statusCode);
  });
});
