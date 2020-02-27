const { expect } = require('chai');
const { codes, statusCodes, messages } = require('../../../lib/constants');
const { ForbiddenError } = require('../../../lib');

describe('ForbiddenError', () => {
  const defaultMsg = messages.FORBIDDEN;
  const defaultCode = codes.FORBIDDEN;
  const customMsg = 'Something bad happened';
  const statusCode = statusCodes.FORBIDDEN;

  it('should have default error message', () => {
    const err = new ForbiddenError();
    expect(err.message).to.equal(defaultMsg);
  });

  it('should have default error code', () => {
    const err = new ForbiddenError();
    expect(err.code).to.equal(defaultCode);
  });

  it('should have custom error message', () => {
    const err = new ForbiddenError(customMsg);
    expect(err.message).to.equal(customMsg);
  });

  it('should have error statusCode', () => {
    const err = new ForbiddenError();
    expect(err.statusCode).to.equal(statusCode);
  });
});
