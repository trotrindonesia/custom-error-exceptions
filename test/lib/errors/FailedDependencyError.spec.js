const { expect } = require('chai');
const { codes, statusCodes, messages } = require('../../../lib/constants');
const { FailedDependencyError } = require('../../../lib/errors');

describe('FailedDependencyError', () => {
  const defaultMsg = messages.FAILED_DEPENDENCY;
  const defaultCode = codes.FAILED_DEPENDENCY;
  const customMsg = 'Something bad happened';
  const statusCode = statusCodes.FAILED_DEPENDENCY;

  it('should have default error message', () => {
    const err = new FailedDependencyError();
    expect(err.message).to.equal(defaultMsg);
  });

  it('should have default error code', () => {
    const err = new FailedDependencyError();
    expect(err.code).to.equal(defaultCode);
  });

  it('should have custom error message', () => {
    const err = new FailedDependencyError(customMsg);
    expect(err.message).to.equal(customMsg);
  });

  it('should have error statusCode', () => {
    const err = new FailedDependencyError();
    expect(err.statusCode).to.equal(statusCode);
  });
});
