const { expect } = require('chai');
const { codes, statusCodes, messages } = require('../../../lib/constants');
const { NotAcceptableError } = require('../../../lib/errors');

describe('NotAcceptableError', () => {
  const defaultMsg = messages.NOT_ACCEPTABLE;
  const defaultCode = codes.NOT_ACCEPTABLE;
  const customMsg = 'Something bad happened';
  const statusCode = statusCodes.NOT_ACCEPTABLE;

  it('should have default error message', () => {
    const err = new NotAcceptableError();
    expect(err.message).to.equal(defaultMsg);
  });

  it('should have default error code', () => {
    const err = new NotAcceptableError();
    expect(err.code).to.equal(defaultCode);
  });

  it('should have custom error message', () => {
    const err = new NotAcceptableError(customMsg);
    expect(err.message).to.equal(customMsg);
  });

  it('should have error statusCode', () => {
    const err = new NotAcceptableError();
    expect(err.statusCode).to.equal(statusCode);
  });
});
