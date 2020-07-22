const winston = require('winston');
const HttpStreamTransport = require('winston-transport-http-stream');
const logger = winston.createLogger({
  transports: [new winston.transports.Console()]
});

const errorLogger = (err, req, res) => {
  const { extendLoggerTransport } = res.locals;
  if(extendLoggerTransport) {
    logger.add(new HttpStreamTransport(
      extendLoggerTransport
    ))
  }
  const start = new Date().getTime();
  res.on('finish', () => {
    const elapsed = new Date().getTime() - start;
    logger.error(
      `${req.method} ${req.originalUrl} ${err.statusCode} - from IP : ${req.ip} - error message: ${err.message} - ${elapsed}ms`
    );
  });
}

const requestLogger = (req, res, next) => {
  const { extendLoggerTransport } = res.locals;
  if(extendLoggerTransport) {
    logger.add(new HttpStreamTransport(
      extendLoggerTransport
    ))
  }
  const start = new Date().getTime();
  res.on('finish', () => {
    const elapsed = new Date().getTime() - start;
    if (res.statusCode < 400) {
      logger.info(
        `${req.method} ${req.originalUrl} ${res.statusCode} - from IP : ${req.ip} - ${elapsed}ms`
      );
    }
  });
  next();
}

const extendHttpLogger = (transport) => {
  return (req, res, next) => {
    res.locals.extendLoggerTransport = {
      url: transport
    }
    next();
  }
}

module.exports = {
  logger,
  requestLogger,
  errorLogger,
  extendHttpLogger
};