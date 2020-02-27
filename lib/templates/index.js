const CustomError =require('./custom');
const DefaultTemplate = require('./default');

module.exports = {
  CustomError,
  ...DefaultTemplate
};
