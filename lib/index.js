const handlers = require('./handlers');
const templates = require('./errors');
const logger = require('./logger');

module.exports = {
  errors: {
    ...templates
  },
  handlers,
  logger
};
