const { expect } = require('chai');
const { codes, statusCodes, messages } = require('../../../lib/constants');
const { ProxyAuthenticationError } = require('../../../lib/errors');

describe('ProxyAuthenticationError', () => {
  const defaultMsg = messages.PROXY_AUTHENTICATION_REQUIRED;
  const defaultCode = codes.PROXY_AUTHENTICATION_REQUIRED;
  const customMsg = 'Something bad happened';
  const statusCode = statusCodes.PROXY_AUTHENTICATION_REQUIRED;

  it('should have default error message', () => {
    const err = new ProxyAuthenticationError();
    expect(err.message).to.equal(defaultMsg);
  });

  it('should have default error code', () => {
    const err = new ProxyAuthenticationError();
    expect(err.code).to.equal(defaultCode);
  });

  it('should have custom error message', () => {
    const err = new ProxyAuthenticationError(customMsg);
    expect(err.message).to.equal(customMsg);
  });

  it('should have error statusCode', () => {
    const err = new ProxyAuthenticationError();
    expect(err.statusCode).to.equal(statusCode);
  });
});
