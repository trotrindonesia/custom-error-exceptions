const { expect } = require('chai');
const { codes, statusCodes, messages } = require('../../../lib/constants');
const { MisdirectedRequestError } = require('../../../lib');

describe('MisdirectedRequestError', () => {
  const defaultMsg = messages.MISDIRECTED_REQUEST;
  const defaultCode = codes.MISDIRECTED_REQUEST;
  const customMsg = 'Something bad happened';
  const statusCode = statusCodes.MISDIRECTED_REQUEST;

  it('should have default error message', () => {
    const err = new MisdirectedRequestError();
    expect(err.message).to.equal(defaultMsg);
  });

  it('should have default error code', () => {
    const err = new MisdirectedRequestError();
    expect(err.code).to.equal(defaultCode);
  });

  it('should have custom error message', () => {
    const err = new MisdirectedRequestError(customMsg);
    expect(err.message).to.equal(customMsg);
  });

  it('should have error statusCode', () => {
    const err = new MisdirectedRequestError();
    expect(err.statusCode).to.equal(statusCode);
  });
});
