const chai = require('chai');
const { expect } = chai;
const sinon = require('sinon');
chai.should();

const { notFoundHandler } = require('../../../lib/handlers');

describe('notFoundHandler', () => {
  let res;
  let req;
  let next;

  beforeEach(() => {
    req = {
      route: true
    };
    res = {
      status: sinon.stub().returns({
        send: sinon.stub()
      })
    };
    next = sinon.stub();
  });

  it('should passed if route found', () => {
    notFoundHandler(req, res, next);
    expect(next.calledOnce).to.equal(true);
  });

  it('should throw NOT_FOUND error if route not found', () => {
    req.route = false;
    expect(() => notFoundHandler(req, res, next)).to.throw(
      Error,
      'Page you\'re request not found'
    );;
  });
});
