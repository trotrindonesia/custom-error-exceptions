const { expect } = require('chai');
const { codes, statusCodes, messages } = require('../../../lib/constants');
const { NotImplementedError } = require('../../../lib');

describe('NotImplementedError', () => {
  const defaultMsg = messages.NOT_IMPLEMENTED;
  const defaultCode = codes.NOT_IMPLEMENTED;
  const customMsg = 'Something bad happened';
  const statusCode = statusCodes.NOT_IMPLEMENTED;

  it('should have default error message', () => {
    const err = new NotImplementedError();
    expect(err.message).to.equal(defaultMsg);
  });

  it('should have default error code', () => {
    const err = new NotImplementedError();
    expect(err.code).to.equal(defaultCode);
  });

  it('should have custom error message', () => {
    const err = new NotImplementedError(customMsg);
    expect(err.message).to.equal(customMsg);
  });

  it('should have error statusCode', () => {
    const err = new NotImplementedError();
    expect(err.statusCode).to.equal(statusCode);
  });
});
