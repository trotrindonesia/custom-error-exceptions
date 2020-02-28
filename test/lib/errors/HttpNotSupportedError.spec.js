const { expect } = require('chai');
const { codes, statusCodes, messages } = require('../../../lib/constants');
const { HttpNotSupportedError } = require('../../../lib/errors');

describe('HttpNotSupportedError', () => {
  const defaultMsg = messages.HTTP_VERSION_NOT_SUPPORTED;
  const defaultCode = codes.HTTP_VERSION_NOT_SUPPORTED;
  const customMsg = 'Something bad happened';
  const statusCode = statusCodes.HTTP_VERSION_NOT_SUPPORTED;

  it('should have default error message', () => {
    const err = new HttpNotSupportedError();
    expect(err.message).to.equal(defaultMsg);
  });

  it('should have default error code', () => {
    const err = new HttpNotSupportedError();
    expect(err.code).to.equal(defaultCode);
  });

  it('should have custom error message', () => {
    const err = new HttpNotSupportedError(customMsg);
    expect(err.message).to.equal(customMsg);
  });

  it('should have error statusCode', () => {
    const err = new HttpNotSupportedError();
    expect(err.statusCode).to.equal(statusCode);
  });
});
