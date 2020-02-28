const { expect } = require('chai');
const { codes, statusCodes, messages } = require('../../../lib/constants');
const { UriTooLongError } = require('../../../lib/errors');

describe('UriTooLongError', () => {
  const defaultMsg = messages.URI_TOO_LONG;
  const defaultCode = codes.URI_TOO_LONG;
  const customMsg = 'Something bad happened';
  const statusCode = statusCodes.URI_TOO_LONG;

  it('should have default error message', () => {
    const err = new UriTooLongError();
    expect(err.message).to.equal(defaultMsg);
  });

  it('should have default error code', () => {
    const err = new UriTooLongError();
    expect(err.code).to.equal(defaultCode);
  });

  it('should have custom error message', () => {
    const err = new UriTooLongError(customMsg);
    expect(err.message).to.equal(customMsg);
  });

  it('should have error statusCode', () => {
    const err = new UriTooLongError();
    expect(err.statusCode).to.equal(statusCode);
  });
});
