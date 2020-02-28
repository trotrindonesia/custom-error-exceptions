const { expect } = require('chai');
const { codes, statusCodes, messages } = require('../../../lib/constants');
const { PreconditionFailedError } = require('../../../lib/errors');

describe('PreconditionFailedError', () => {
  const defaultMsg = messages.PRECONDITION_FAILED;
  const defaultCode = codes.PRECONDITION_FAILED;
  const customMsg = 'Something bad happened';
  const statusCode = statusCodes.PRECONDITION_FAILED;

  it('should have default error message', () => {
    const err = new PreconditionFailedError();
    expect(err.message).to.equal(defaultMsg);
  });

  it('should have default error code', () => {
    const err = new PreconditionFailedError();
    expect(err.code).to.equal(defaultCode);
  });

  it('should have custom error message', () => {
    const err = new PreconditionFailedError(customMsg);
    expect(err.message).to.equal(customMsg);
  });

  it('should have error statusCode', () => {
    const err = new PreconditionFailedError();
    expect(err.statusCode).to.equal(statusCode);
  });
});
