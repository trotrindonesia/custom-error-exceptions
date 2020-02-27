const { expect } = require('chai');
const { codes, statusCodes, messages } = require('../../../lib/constants');
const { RangeNotSatisfiableError } = require('../../../lib');

describe('RangeNotSatisfiableError', () => {
  const defaultMsg = messages.RANGE_NOT_SATISFIABLE;
  const defaultCode = codes.RANGE_NOT_SATISFIABLE;
  const customMsg = 'Something bad happened';
  const statusCode = statusCodes.RANGE_NOT_SATISFIABLE;

  it('should have default error message', () => {
    const err = new RangeNotSatisfiableError();
    expect(err.message).to.equal(defaultMsg);
  });

  it('should have default error code', () => {
    const err = new RangeNotSatisfiableError();
    expect(err.code).to.equal(defaultCode);
  });

  it('should have custom error message', () => {
    const err = new RangeNotSatisfiableError(customMsg);
    expect(err.message).to.equal(customMsg);
  });

  it('should have error statusCode', () => {
    const err = new RangeNotSatisfiableError();
    expect(err.statusCode).to.equal(statusCode);
  });
});
