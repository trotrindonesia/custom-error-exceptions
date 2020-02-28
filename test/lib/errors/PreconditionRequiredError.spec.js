const { expect } = require('chai');
const { codes, statusCodes, messages } = require('../../../lib/constants');
const { PreconditionRequiredError } = require('../../../lib/errors');

describe('PreconditionRequiredError', () => {
  const defaultMsg = messages.PRECONDITION_REQUIRED;
  const defaultCode = codes.PRECONDITION_REQUIRED;
  const customMsg = 'Something bad happened';
  const statusCode = statusCodes.PRECONDITION_REQUIRED;

  it('should have default error message', () => {
    const err = new PreconditionRequiredError();
    expect(err.message).to.equal(defaultMsg);
  });

  it('should have default error code', () => {
    const err = new PreconditionRequiredError();
    expect(err.code).to.equal(defaultCode);
  });

  it('should have custom error message', () => {
    const err = new PreconditionRequiredError(customMsg);
    expect(err.message).to.equal(customMsg);
  });

  it('should have error statusCode', () => {
    const err = new PreconditionRequiredError();
    expect(err.statusCode).to.equal(statusCode);
  });
});
