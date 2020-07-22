const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { createWebHandler } = require('../../../lib/handlers');

const { expect } = chai;
chai.should();
chai.use(sinonChai);

describe('createWebHandler', () => {
  let stub;
  let req;
  let res;
  let func;
  let errorLogger;

  beforeEach(() => {
    stub = sinon.stub();
    req = sinon.stub();
    res = {
      status: () => ({
        send: sinon.stub()
      }),
      on: sinon.stub()
    };
    func = createWebHandler(stub);
    errorLogger = () => sinon.stub();
  });

  it('should return a function that calls', async () => {
    await func(req, res);
    stub.resolves();
    expect(stub.calledWith(req, res)).to.equal(true);
  });

  it('should calls with the error', async () => {
    const error = {
      statusCode: 500,
      code: 'INTERNAL_SERVER_ERROR',
      message: 'Internal Server Erro'
    };
    stub.rejects(error);
    await func(req, res);
    res.status.send = error;
    expect(res.status.send).to.deep.equal(error);
  });

  it('should calls with the error without status code', async () => {
    const error = {
      code: 'INTERNAL_SERVER_ERROR',
      message: 'Internal Server Erro'
    };
    stub.rejects(error);
    await func(req, res);
    errorLogger(error, req, res);
    res.status.send = error;
    expect(res.status.send).to.deep.equal(error);
  });
});
