const { expect } = require('chai');
const { codes, statusCodes, messages } = require('../../../lib/constants');
const { LengthRequiredError } = require('../../../lib');

describe('LengthRequiredError', () => {
  const defaultMsg = messages.LENGTH_REQUIRED;
  const defaultCode = codes.LENGTH_REQUIRED;
  const customMsg = 'Something bad happened';
  const statusCode = statusCodes.LENGTH_REQUIRED;

  it('should have default error message', () => {
    const err = new LengthRequiredError();
    expect(err.message).to.equal(defaultMsg);
  });

  it('should have default error code', () => {
    const err = new LengthRequiredError();
    expect(err.code).to.equal(defaultCode);
  });

  it('should have custom error message', () => {
    const err = new LengthRequiredError(customMsg);
    expect(err.message).to.equal(customMsg);
  });

  it('should have error statusCode', () => {
    const err = new LengthRequiredError();
    expect(err.statusCode).to.equal(statusCode);
  });
});
