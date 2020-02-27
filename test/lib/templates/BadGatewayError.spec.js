const { expect } = require('chai');
const { codes, statusCodes, messages } = require('../../../lib/constants');
const { BadGatewayError } = require('../../../lib');

describe('BadGatewayError', () => {
  const defaultMsg = messages.BAD_GATEWAY;
  const defaultCode = codes.BAD_GATEWAY;
  const customMsg = 'Something bad happened';
  const statusCode = statusCodes.BAD_GATEWAY;

  it('should have default error message', () => {
    const err = new BadGatewayError();
    expect(err.message).to.equal(defaultMsg);
  });

  it('should have default error code', () => {
    const err = new BadGatewayError();
    expect(err.code).to.equal(defaultCode);
  });

  it('should have custom error message', () => {
    const err = new BadGatewayError(customMsg);
    expect(err.message).to.equal(customMsg);
  });

  it('should have error statusCode', () => {
    const err = new BadGatewayError();
    expect(err.statusCode).to.equal(statusCode);
  });
});
