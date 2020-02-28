const { expect } = require('chai');
const { codes, statusCodes, messages } = require('../../../lib/constants');
const { UpgradeRequiredError } = require('../../../lib/errors');

describe('UpgradeRequiredError', () => {
  const defaultMsg = messages.UPGRADE_REQUIRED;
  const defaultCode = codes.UPGRADE_REQUIRED;
  const customMsg = 'Something bad happened';
  const statusCode = statusCodes.UPGRADE_REQUIRED;

  it('should have default error message', () => {
    const err = new UpgradeRequiredError();
    expect(err.message).to.equal(defaultMsg);
  });

  it('should have default error code', () => {
    const err = new UpgradeRequiredError();
    expect(err.code).to.equal(defaultCode);
  });

  it('should have custom error message', () => {
    const err = new UpgradeRequiredError(customMsg);
    expect(err.message).to.equal(customMsg);
  });

  it('should have error statusCode', () => {
    const err = new UpgradeRequiredError();
    expect(err.statusCode).to.equal(statusCode);
  });
});
