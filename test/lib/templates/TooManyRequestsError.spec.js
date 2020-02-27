const { expect } = require('chai');
const { codes, statusCodes, messages } = require('../../../lib/constants');
const { TooManyRequestsError } = require('../../../lib');

describe('TooManyRequestsError', () => {
  const defaultMsg = messages.TOO_MANY_REQUESTS;
  const defaultCode = codes.TOO_MANY_REQUESTS;
  const customMsg = 'Something bad happened';
  const statusCode = statusCodes.TOO_MANY_REQUESTS;

  it('should have default error message', () => {
    const err = new TooManyRequestsError();
    expect(err.message).to.equal(defaultMsg);
  });

  it('should have default error code', () => {
    const err = new TooManyRequestsError();
    expect(err.code).to.equal(defaultCode);
  });

  it('should have custom error message', () => {
    const err = new TooManyRequestsError(customMsg);
    expect(err.message).to.equal(customMsg);
  });

  it('should have error statusCode', () => {
    const err = new TooManyRequestsError();
    expect(err.statusCode).to.equal(statusCode);
  });
});
