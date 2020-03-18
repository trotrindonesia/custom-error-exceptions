const winston = require('winston');
const logger = winston.createLogger({
  transports: [new winston.transports.Console()]
});

const transformSuccessLogger = (req, res, elapsed) => {
  if (res.statusCode < 400) {
    logger.info(
      `${req.method} ${req.originalUrl} ${res.statusCode} - from IP : ${req.ip} - ${elapsed}ms`
    );
  }
};

const errorLogger = (err, req, res) => {
  const start = new Date().getTime();
  res.on('finish', () => {
    const elapsed = new Date().getTime() - start;
    logger.error(
      `${req.method} ${req.originalUrl} ${err.statusCode} - from IP : ${req.ip} - error message: ${err.message} - ${elapsed}ms`
    );
  });
}

const requestLogger = (req, res, next) => {
  const start = new Date().getTime();
  res.on('finish', () => {
    const elapsed = new Date().getTime() - start;
    transformSuccessLogger(req, res, elapsed);
  });
  next();
}

module.exports = {
  logger,
  requestLogger,
  errorLogger
};