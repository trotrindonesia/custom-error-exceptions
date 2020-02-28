const { expect } = require('chai');
const { codes, statusCodes, messages } = require('../../../lib/constants');
const { TooEarlyError } = require('../../../lib/errors');

describe('TooEarlyError', () => {
  const defaultMsg = messages.TOO_EARLY;
  const defaultCode = codes.TOO_EARLY;
  const customMsg = 'Something bad happened';
  const statusCode = statusCodes.TOO_EARLY;

  it('should have default error message', () => {
    const err = new TooEarlyError();
    expect(err.message).to.equal(defaultMsg);
  });

  it('should have default error code', () => {
    const err = new TooEarlyError();
    expect(err.code).to.equal(defaultCode);
  });

  it('should have custom error message', () => {
    const err = new TooEarlyError(customMsg);
    expect(err.message).to.equal(customMsg);
  });

  it('should have error statusCode', () => {
    const err = new TooEarlyError();
    expect(err.statusCode).to.equal(statusCode);
  });
});
