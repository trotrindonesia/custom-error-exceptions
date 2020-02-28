const { expect } = require('chai');
const { codes, statusCodes, messages } = require('../../../lib/constants');
const { NotFoundError } = require('../../../lib/errors');

describe('NotFoundError', () => {
  const defaultMsg = messages.NOT_FOUND;
  const defaultCode = codes.NOT_FOUND;
  const customMsg = 'Something bad happened';
  const statusCode = statusCodes.NOT_FOUND;

  it('should have default error message', () => {
    const err = new NotFoundError();
    expect(err.message).to.equal(defaultMsg);
  });

  it('should have default error code', () => {
    const err = new NotFoundError();
    expect(err.code).to.equal(defaultCode);
  });

  it('should have custom error message', () => {
    const err = new NotFoundError(customMsg);
    expect(err.message).to.equal(customMsg);
  });

  it('should have error statusCode', () => {
    const err = new NotFoundError();
    expect(err.statusCode).to.equal(statusCode);
  });
});
