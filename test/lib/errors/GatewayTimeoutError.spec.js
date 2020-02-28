const { expect } = require('chai');
const { codes, statusCodes, messages } = require('../../../lib/constants');
const { GatewayTimeoutError } = require('../../../lib/errors');

describe('GatewayTimeoutError', () => {
  const defaultMsg = messages.GATEWAY_TIMEOUT;
  const defaultCode = codes.GATEWAY_TIMEOUT;
  const customMsg = 'Something bad happened';
  const statusCode = statusCodes.GATEWAY_TIMEOUT;

  it('should have default error message', () => {
    const err = new GatewayTimeoutError();
    expect(err.message).to.equal(defaultMsg);
  });

  it('should have default error code', () => {
    const err = new GatewayTimeoutError();
    expect(err.code).to.equal(defaultCode);
  });

  it('should have custom error message', () => {
    const err = new GatewayTimeoutError(customMsg);
    expect(err.message).to.equal(customMsg);
  });

  it('should have error statusCode', () => {
    const err = new GatewayTimeoutError();
    expect(err.statusCode).to.equal(statusCode);
  });
});
