const { expect } = require('chai');
const { codes, statusCodes, messages } = require('../../../lib/constants');
const { GoneError } = require('../../../lib');

describe('GoneError', () => {
  const defaultMsg = messages.GONE;
  const defaultCode = codes.GONE;
  const customMsg = 'Something bad happened';
  const statusCode = statusCodes.GONE;

  it('should have default error message', () => {
    const err = new GoneError();
    expect(err.message).to.equal(defaultMsg);
  });

  it('should have default error code', () => {
    const err = new GoneError();
    expect(err.code).to.equal(defaultCode);
  });

  it('should have custom error message', () => {
    const err = new GoneError(customMsg);
    expect(err.message).to.equal(customMsg);
  });

  it('should have error statusCode', () => {
    const err = new GoneError();
    expect(err.statusCode).to.equal(statusCode);
  });
});
