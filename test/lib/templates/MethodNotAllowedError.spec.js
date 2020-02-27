const { expect } = require('chai');
const { codes, statusCodes, messages } = require('../../../lib/constants');
const { MethodNotAllowedError } = require('../../../lib');

describe('MethodNotAllowedError', () => {
  const defaultMsg = messages.METHOD_NOT_ALLOWED;
  const defaultCode = codes.METHOD_NOT_ALLOWED;
  const customMsg = 'Something bad happened';
  const statusCode = statusCodes.METHOD_NOT_ALLOWED;

  it('should have default error message', () => {
    const err = new MethodNotAllowedError();
    expect(err.message).to.equal(defaultMsg);
  });

  it('should have default error code', () => {
    const err = new MethodNotAllowedError();
    expect(err.code).to.equal(defaultCode);
  });

  it('should have custom error message', () => {
    const err = new MethodNotAllowedError(customMsg);
    expect(err.message).to.equal(customMsg);
  });

  it('should have error statusCode', () => {
    const err = new MethodNotAllowedError();
    expect(err.statusCode).to.equal(statusCode);
  });
});
