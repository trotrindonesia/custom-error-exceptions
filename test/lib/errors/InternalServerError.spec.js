const { expect } = require('chai');
const { codes, statusCodes, messages } = require('../../../lib/constants');
const { InternalServerError } = require('../../../lib/errors');

describe('InternalServerError', () => {
  const defaultMsg = messages.INTERNAL_SERVER_ERROR;
  const defaultCode = codes.INTERNAL_SERVER_ERROR;
  const customMsg = 'Something bad happened';
  const statusCode = statusCodes.INTERNAL_SERVER_ERROR;

  it('should have default error message', () => {
    const err = new InternalServerError();
    expect(err.message).to.equal(defaultMsg);
  });

  it('should have default error code', () => {
    const err = new InternalServerError();
    expect(err.code).to.equal(defaultCode);
  });

  it('should have custom error message', () => {
    const err = new InternalServerError(customMsg);
    expect(err.message).to.equal(customMsg);
  });

  it('should have error statusCode', () => {
    const err = new InternalServerError();
    expect(err.statusCode).to.equal(statusCode);
  });
});
