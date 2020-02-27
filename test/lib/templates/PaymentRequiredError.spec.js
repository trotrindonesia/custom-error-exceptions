const { expect } = require('chai');
const { codes, statusCodes, messages } = require('../../../lib/constants');
const { PaymentRequiredError } = require('../../../lib');

describe('PaymentRequiredError', () => {
  const defaultMsg = messages.PAYMENT_REQUIRED;
  const defaultCode = codes.PAYMENT_REQUIRED;
  const customMsg = 'Something bad happened';
  const statusCode = statusCodes.PAYMENT_REQUIRED;

  it('should have default error message', () => {
    const err = new PaymentRequiredError();
    expect(err.message).to.equal(defaultMsg);
  });

  it('should have default error code', () => {
    const err = new PaymentRequiredError();
    expect(err.code).to.equal(defaultCode);
  });

  it('should have custom error message', () => {
    const err = new PaymentRequiredError(customMsg);
    expect(err.message).to.equal(customMsg);
  });

  it('should have error statusCode', () => {
    const err = new PaymentRequiredError();
    expect(err.statusCode).to.equal(statusCode);
  });
});
