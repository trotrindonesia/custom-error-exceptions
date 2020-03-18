const winston = require('winston');

const options = {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true
};

const logger = new winston.Logger({
  transports: [new winston.transports.Console(options)],
  exitOnError: false
});

logger.stream = {
  write: function(message, encoding) {
    logger.info(message);
  }
};

module.exports = logger;
