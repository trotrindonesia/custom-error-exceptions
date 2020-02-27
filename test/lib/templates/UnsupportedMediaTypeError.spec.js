const { expect } = require('chai');
const { codes, statusCodes, messages } = require('../../../lib/constants');
const { UnsupportedMediaTypeError } = require('../../../lib');

describe('UnsupportedMediaTypeError', () => {
  const defaultMsg = messages.UNSUPPORTED_MEDIA_TYPE;
  const defaultCode = codes.UNSUPPORTED_MEDIA_TYPE;
  const customMsg = 'Something bad happened';
  const statusCode = statusCodes.UNSUPPORTED_MEDIA_TYPE;

  it('should have default error message', () => {
    const err = new UnsupportedMediaTypeError();
    expect(err.message).to.equal(defaultMsg);
  });

  it('should have default error code', () => {
    const err = new UnsupportedMediaTypeError();
    expect(err.code).to.equal(defaultCode);
  });

  it('should have custom error message', () => {
    const err = new UnsupportedMediaTypeError(customMsg);
    expect(err.message).to.equal(customMsg);
  });

  it('should have error statusCode', () => {
    const err = new UnsupportedMediaTypeError();
    expect(err.statusCode).to.equal(statusCode);
  });
});
