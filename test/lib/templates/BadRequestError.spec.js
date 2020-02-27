const { expect } = require('chai');
const { codes, statusCodes, messages } = require('../../../lib/constants');
const { BadRequestError } = require('../../../lib');

describe('BadRequestError', () => {
  const defaultMsg = messages.BAD_REQUEST;
  const defaultCode = codes.BAD_REQUEST;
  const customMsg = 'Something bad happened';
  const statusCode = statusCodes.BAD_REQUEST;

  it('should have default error message', () => {
    const err = new BadRequestError();
    expect(err.message).to.equal(defaultMsg);
  });

  it('should have default error code', () => {
    const err = new BadRequestError();
    expect(err.code).to.equal(defaultCode);
  });

  it('should have custom error message', () => {
    const err = new BadRequestError(customMsg);
    expect(err.message).to.equal(customMsg);
  });

  it('should have error statusCode', () => {
    const err = new BadRequestError();
    expect(err.statusCode).to.equal(statusCode);
  });
});
