const { expect } = require('chai');
const { codes, statusCodes, messages } = require('../../../lib/constants');
const { VariantAlsoNegotiatesError } = require('../../../lib/errors');

describe('VariantAlsoNegotiatesError', () => {
  const defaultMsg = messages.VARIANT_ALSO_NEGOTIATES;
  const defaultCode = codes.VARIANT_ALSO_NEGOTIATES;
  const customMsg = 'Something bad happened';
  const statusCode = statusCodes.VARIANT_ALSO_NEGOTIATES;

  it('should have default error message', () => {
    const err = new VariantAlsoNegotiatesError();
    expect(err.message).to.equal(defaultMsg);
  });

  it('should have default error code', () => {
    const err = new VariantAlsoNegotiatesError();
    expect(err.code).to.equal(defaultCode);
  });

  it('should have custom error message', () => {
    const err = new VariantAlsoNegotiatesError(customMsg);
    expect(err.message).to.equal(customMsg);
  });

  it('should have error statusCode', () => {
    const err = new VariantAlsoNegotiatesError();
    expect(err.statusCode).to.equal(statusCode);
  });
});
