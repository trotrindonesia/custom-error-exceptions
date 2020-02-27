const { expect } = require('chai');
const { codes, statusCodes, messages } = require('../../../lib/constants');
const { PayloadTooLargeError } = require('../../../lib');

describe('PayloadTooLargeError', () => {
  const defaultMsg = messages.PAYLOAD_TOO_LARGE;
  const defaultCode = codes.PAYLOAD_TOO_LARGE;
  const customMsg = 'Something bad happened';
  const statusCode = statusCodes.PAYLOAD_TOO_LARGE;

  it('should have default error message', () => {
    const err = new PayloadTooLargeError();
    expect(err.message).to.equal(defaultMsg);
  });

  it('should have default error code', () => {
    const err = new PayloadTooLargeError();
    expect(err.code).to.equal(defaultCode);
  });

  it('should have custom error message', () => {
    const err = new PayloadTooLargeError(customMsg);
    expect(err.message).to.equal(customMsg);
  });

  it('should have error statusCode', () => {
    const err = new PayloadTooLargeError();
    expect(err.statusCode).to.equal(statusCode);
  });
});
