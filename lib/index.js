const handlers = require('./handlers');
const templates = require('./errors');

module.exports = {
  errors: {
    ...templates
  },
  handlers
};
