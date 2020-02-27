const { expect } = require('chai');
const { codes, statusCodes, messages } = require('../../../lib/constants');
const { NotExtendedError } = require('../../../lib');

describe('NotExtendedError', () => {
  const defaultMsg = messages.NOT_EXTENDED;
  const defaultCode = codes.NOT_EXTENDED;
  const customMsg = 'Something bad happened';
  const statusCode = statusCodes.NOT_EXTENDED;

  it('should have default error message', () => {
    const err = new NotExtendedError();
    expect(err.message).to.equal(defaultMsg);
  });

  it('should have default error code', () => {
    const err = new NotExtendedError();
    expect(err.code).to.equal(defaultCode);
  });

  it('should have custom error message', () => {
    const err = new NotExtendedError(customMsg);
    expect(err.message).to.equal(customMsg);
  });

  it('should have error statusCode', () => {
    const err = new NotExtendedError();
    expect(err.statusCode).to.equal(statusCode);
  });
});
