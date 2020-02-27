const errorHandler = require('./errorHandler');
const errors = require('./templates');

module.exports = {
  errorHandler,
  ...errors
};
