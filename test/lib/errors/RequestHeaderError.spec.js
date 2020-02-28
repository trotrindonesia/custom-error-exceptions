const { expect } = require('chai');
const { codes, statusCodes, messages } = require('../../../lib/constants');
const { RequestHeaderError } = require('../../../lib/errors');

describe('RequestHeaderError', () => {
  const defaultMsg = messages.REQUEST_HEADER_FIELDS_TOO_LARGE;
  const defaultCode = codes.REQUEST_HEADER_FIELDS_TOO_LARGE;
  const customMsg = 'Something bad happened';
  const statusCode = statusCodes.REQUEST_HEADER_FIELDS_TOO_LARGE;

  it('should have default error message', () => {
    const err = new RequestHeaderError();
    expect(err.message).to.equal(defaultMsg);
  });

  it('should have default error code', () => {
    const err = new RequestHeaderError();
    expect(err.code).to.equal(defaultCode);
  });

  it('should have custom error message', () => {
    const err = new RequestHeaderError(customMsg);
    expect(err.message).to.equal(customMsg);
  });

  it('should have error statusCode', () => {
    const err = new RequestHeaderError();
    expect(err.statusCode).to.equal(statusCode);
  });
});
