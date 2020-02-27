const { expect } = require('chai');
const { codes, statusCodes, messages } = require('../../../lib/constants');
const { ConflictError } = require('../../../lib');

describe('ConflictError', () => {
  const defaultMsg = messages.CONFLICT;
  const defaultCode = codes.CONFLICT;
  const customMsg = 'Something bad happened';
  const statusCode = statusCodes.CONFLICT;

  it('should have default error message', () => {
    const err = new ConflictError();
    expect(err.message).to.equal(defaultMsg);
  });

  it('should have default error code', () => {
    const err = new ConflictError();
    expect(err.code).to.equal(defaultCode);
  });

  it('should have custom error message', () => {
    const err = new ConflictError(customMsg);
    expect(err.message).to.equal(customMsg);
  });

  it('should have error statusCode', () => {
    const err = new ConflictError();
    expect(err.statusCode).to.equal(statusCode);
  });
});
