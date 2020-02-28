const { expect } = require('chai');
const { codes, statusCodes, messages } = require('../../../lib/constants');
const { RequestTimeoutError } = require('../../../lib/errors');

describe('RequestTimeoutError', () => {
  const defaultMsg = messages.REQUEST_TIMEOUT;
  const defaultCode = codes.REQUEST_TIMEOUT;
  const customMsg = 'Something bad happened';
  const statusCode = statusCodes.REQUEST_TIMEOUT;

  it('should have default error message', () => {
    const err = new RequestTimeoutError();
    expect(err.message).to.equal(defaultMsg);
  });

  it('should have default error code', () => {
    const err = new RequestTimeoutError();
    expect(err.code).to.equal(defaultCode);
  });

  it('should have custom error message', () => {
    const err = new RequestTimeoutError(customMsg);
    expect(err.message).to.equal(customMsg);
  });

  it('should have error statusCode', () => {
    const err = new RequestTimeoutError();
    expect(err.statusCode).to.equal(statusCode);
  });
});
