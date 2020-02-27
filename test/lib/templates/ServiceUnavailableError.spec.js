const { expect } = require('chai');
const { codes, statusCodes, messages } = require('../../../lib/constants');
const { ServiceUnavailableError } = require('../../../lib');

describe('ServiceUnavailableError', () => {
  const defaultMsg = messages.SERVICE_UNAVAILABLE;
  const defaultCode = codes.SERVICE_UNAVAILABLE;
  const customMsg = 'Something bad happened';
  const statusCode = statusCodes.SERVICE_UNAVAILABLE;

  it('should have default error message', () => {
    const err = new ServiceUnavailableError();
    expect(err.message).to.equal(defaultMsg);
  });

  it('should have default error code', () => {
    const err = new ServiceUnavailableError();
    expect(err.code).to.equal(defaultCode);
  });

  it('should have custom error message', () => {
    const err = new ServiceUnavailableError(customMsg);
    expect(err.message).to.equal(customMsg);
  });

  it('should have error statusCode', () => {
    const err = new ServiceUnavailableError();
    expect(err.statusCode).to.equal(statusCode);
  });
});
