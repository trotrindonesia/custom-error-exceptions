const { expect } = require('chai');
const { codes, statusCodes, messages } = require('../../../lib/constants');
const { InsufficientStorageError } = require('../../../lib');

describe('InsufficientStorageError', () => {
  const defaultMsg = messages.INSUFFICIENT_STORAGE;
  const defaultCode = codes.INSUFFICIENT_STORAGE;
  const customMsg = 'Something bad happened';
  const statusCode = statusCodes.INSUFFICIENT_STORAGE;

  it('should have default error message', () => {
    const err = new InsufficientStorageError();
    expect(err.message).to.equal(defaultMsg);
  });

  it('should have default error code', () => {
    const err = new InsufficientStorageError();
    expect(err.code).to.equal(defaultCode);
  });

  it('should have custom error message', () => {
    const err = new InsufficientStorageError(customMsg);
    expect(err.message).to.equal(customMsg);
  });

  it('should have error statusCode', () => {
    const err = new InsufficientStorageError();
    expect(err.statusCode).to.equal(statusCode);
  });
});
