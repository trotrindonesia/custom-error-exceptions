const handlers = require('./handlers');
const templates = require('./errors');
const loggers = require('./loggers');

module.exports = {
  errors: {
    ...templates
  },
  handlers,
  loggers
};
