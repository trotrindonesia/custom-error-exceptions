const { expect } = require('chai');
const { codes, statusCodes, messages } = require('../../../lib/constants');
const { UnauthorizedError } = require('../../../lib/errors');

describe('UnauthorizedError', () => {
  const defaultMsg = messages.UNAUTHORIZED;
  const defaultCode = codes.UNAUTHORIZED;
  const customMsg = 'Something bad happened';
  const statusCode = statusCodes.UNAUTHORIZED;

  it('should have default error message', () => {
    const err = new UnauthorizedError();
    expect(err.message).to.equal(defaultMsg);
  });

  it('should have default error code', () => {
    const err = new UnauthorizedError();
    expect(err.code).to.equal(defaultCode);
  });

  it('should have custom error message', () => {
    const err = new UnauthorizedError(customMsg);
    expect(err.message).to.equal(customMsg);
  });

  it('should have error statusCode', () => {
    const err = new UnauthorizedError();
    expect(err.statusCode).to.equal(statusCode);
  });
});
