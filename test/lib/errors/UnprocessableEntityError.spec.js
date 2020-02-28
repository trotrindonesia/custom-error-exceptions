const { expect } = require('chai');
const { codes, statusCodes, messages } = require('../../../lib/constants');
const { UnprocessableEntityError } = require('../../../lib/errors');

describe('UnprocessableEntityError', () => {
  const defaultMsg = messages.UNPROCESSABLE_ENTITY;
  const defaultCode = codes.UNPROCESSABLE_ENTITY;
  const customMsg = 'Something bad happened';
  const statusCode = statusCodes.UNPROCESSABLE_ENTITY;

  it('should have default error message', () => {
    const err = new UnprocessableEntityError();
    expect(err.message).to.equal(defaultMsg);
  });

  it('should have default error code', () => {
    const err = new UnprocessableEntityError();
    expect(err.code).to.equal(defaultCode);
  });

  it('should have custom error message', () => {
    const err = new UnprocessableEntityError(customMsg);
    expect(err.message).to.equal(customMsg);
  });

  it('should have error statusCode', () => {
    const err = new UnprocessableEntityError();
    expect(err.statusCode).to.equal(statusCode);
  });
});
