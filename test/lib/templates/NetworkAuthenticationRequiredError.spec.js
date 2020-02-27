const { expect } = require('chai');
const { codes, statusCodes, messages } = require('../../../lib/constants');
const { NetworkAuthenticationRequiredError } = require('../../../lib');

describe('NetworkAuthenticationRequiredError', () => {
  const defaultMsg = messages.NETWORK_AUTHENTICATION_REQUIRED;
  const defaultCode = codes.NETWORK_AUTHENTICATION_REQUIRED;
  const customMsg = 'Something bad happened';
  const statusCode = statusCodes.NETWORK_AUTHENTICATION_REQUIRED;

  it('should have default error message', () => {
    const err = new NetworkAuthenticationRequiredError();
    expect(err.message).to.equal(defaultMsg);
  });

  it('should have default error code', () => {
    const err = new NetworkAuthenticationRequiredError();
    expect(err.code).to.equal(defaultCode);
  });

  it('should have custom error message', () => {
    const err = new NetworkAuthenticationRequiredError(customMsg);
    expect(err.message).to.equal(customMsg);
  });

  it('should have error statusCode', () => {
    const err = new NetworkAuthenticationRequiredError();
    expect(err.statusCode).to.equal(statusCode);
  });
});
