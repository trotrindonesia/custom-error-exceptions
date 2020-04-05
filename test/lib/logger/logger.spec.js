const { expect } = require('chai');
const sinon = require('sinon');
const randomstring = require('randomstring');
const EventEmitter = require('events');
const { errorLogger, requestLogger } = require('../../../lib/logger')

describe('logger', () => {
    
    const req = {
        ip: randomstring.generate(),
        originalUrl: 'localhost:8000',
        method: 'GET'       
    };
    let err;
    const res = new EventEmitter();      
    const next = sinon.stub();    
    const eventSpy = sinon.spy();    
  
    beforeEach(() => {
      err = {
        isCustomError: true,
        message: randomstring.generate(),
        statusCode: randomstring.generate(),
        code: randomstring.generate()
      };
    });

    it('should print an error log message', () => {         
        errorLogger(err,req,res);
        res.emit('finish', eventSpy);
        expect(eventSpy.calledOnce);
    });

    it('should print a request log message if statusCode < 400', () => {
        res.statusCode = 200;
        requestLogger(req, res, next);
        res.emit('finish', eventSpy);
        expect(next.calledOnce).to.equal(true);
    });

    it('should not print a request log message if statucode > 400', () => {
        res.statusCode = 400;
        requestLogger(req, res, next);
        res.emit('finish', eventSpy);
        expect(next.calledOnce).to.equal(false);
    });

});
