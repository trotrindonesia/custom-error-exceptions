const { expect } = require('chai');
const { codes, statusCodes, messages } = require('../../../lib/constants');
const { LockedError } = require('../../../lib');

describe('LockedError', () => {
  const defaultMsg = messages.LOCKED;
  const defaultCode = codes.LOCKED;
  const customMsg = 'Something bad happened';
  const statusCode = statusCodes.LOCKED;

  it('should have default error message', () => {
    const err = new LockedError();
    expect(err.message).to.equal(defaultMsg);
  });

  it('should have default error code', () => {
    const err = new LockedError();
    expect(err.code).to.equal(defaultCode);
  });

  it('should have custom error message', () => {
    const err = new LockedError(customMsg);
    expect(err.message).to.equal(customMsg);
  });

  it('should have error statusCode', () => {
    const err = new LockedError();
    expect(err.statusCode).to.equal(statusCode);
  });
});
