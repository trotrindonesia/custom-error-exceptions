const { expect } = require('chai');
const { codes, statusCodes, messages } = require('../../../lib/constants');
const { LegalReasonsError } = require('../../../lib/errors');

describe('LegalReasonsError', () => {
  const defaultMsg = messages.UNAVAILABLE_FOR_LEGAL_REASONS;
  const defaultCode = codes.UNAVAILABLE_FOR_LEGAL_REASONS;
  const customMsg = 'Something bad happened';
  const statusCode = statusCodes.UNAVAILABLE_FOR_LEGAL_REASONS;

  it('should have default error message', () => {
    const err = new LegalReasonsError();
    expect(err.message).to.equal(defaultMsg);
  });

  it('should have default error code', () => {
    const err = new LegalReasonsError();
    expect(err.code).to.equal(defaultCode);
  });

  it('should have custom error message', () => {
    const err = new LegalReasonsError(customMsg);
    expect(err.message).to.equal(customMsg);
  });

  it('should have error statusCode', () => {
    const err = new LegalReasonsError();
    expect(err.statusCode).to.equal(statusCode);
  });
});
