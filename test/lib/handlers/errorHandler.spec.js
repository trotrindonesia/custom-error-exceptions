const { expect } = require('chai');
const sinon = require('sinon');
const randomstring = require('randomstring');

const { errorHandler } = require('../../../lib/handlers');

describe('errorHandler', () => {
  let err;
  let res;
  let next;

  beforeEach(() => {
    err = {
      isCustomError: true,
      message: randomstring.generate(),
      statusCode: randomstring.generate(),
      code: randomstring.generate()
    };

    res = {
      status: sinon.stub().returns({
        send: sinon.stub()
      }),
      on: sinon.stub()
    };
    next = sinon.stub();
  });

  it('should set status if error a part of custom error', () => {
    errorHandler(err, null, res, next);
    expect(res.status.calledOnce).to.equal(true);
    expect(next.calledOnce).to.equal(true);
  });

  it("should set to status 500 if it's a generic error", () => {
    err.isCustomError = false;
    errorHandler(err, null, res, next);
    expect(res.status.calledWith(500)).to.equal(true);
  });
});
