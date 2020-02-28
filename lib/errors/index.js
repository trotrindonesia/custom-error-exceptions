const CustomError = require('./CustomError');
const BadRequestError = require('./BadRequestError');
const UnauthorizedError = require('./UnauthorizedError');
const PaymentRequiredError = require('./PaymentRequiredError');
const ForbiddenError = require('./ForbiddenError');
const NotFoundError = require('./NotFoundError');
const MethodNotAllowedError = require('./MethodNotAllowedError');
const NotAcceptableError = require('./NotAcceptableError');
const ProxyAuthenticationError = require('./ProxyAuthenticationError');
const RequestTimeoutError = require('./RequestTimeoutError');
const ConflictError = require('./ConflictError');
const GoneError = require('./GoneError');
const LengthRequiredError = require('./LengthRequiredError');
const PreconditionFailedError = require('./PreconditionFailedError');
const PayloadTooLargeError = require('./PayloadTooLargeError');
const UriTooLongError = require('./UriTooLongError');
const UnsupportedMediaTypeError = require('./UnsupportedMediaTypeError');
const RangeNotSatisfiableError = require('./RangeNotSatisfiableError');
const MisdirectedRequestError = require('./MisdirectedRequestError');
const UnprocessableEntityError = require('./UnprocessableEntityError');
const LockedError = require('./LockedError');
const FailedDependencyError = require('./FailedDependencyError');
const TooEarlyError = require('./TooEarlyError');
const UpgradeRequiredError = require('./UpgradeRequiredError');
const PreconditionRequiredError = require('./PreconditionRequiredError');
const TooManyRequestsError = require('./TooManyRequestsError');
const RequestHeaderError = require('./RequestHeaderError');
const LegalReasonsError = require('./LegalReasonsError');
const InternalServerError = require('./InternalServerError');
const NotImplementedError = require('./NotImplementedError');
const BadGatewayError = require('./BadGatewayError');
const ServiceUnavailableError = require('./ServiceUnavailableError');
const GatewayTimeoutError = require('./GatewayTimeoutError');
const HttpNotSupportedError = require('./HttpNotSupportedError');
const VariantAlsoNegotiatesError = require('./VariantAlsoNegotiatesError');
const InsufficientStorageError = require('./InsufficientStorageError');
const LoopDetectedError = require('./LoopDetectedError');
const NotExtendedError = require('./NotExtendedError');
const NetworkAuthenticationRequiredError = require('./NetworkAuthenticationRequiredError');

module.exports = {
  CustomError,
  BadRequestError,
  UnauthorizedError,
  PaymentRequiredError,
  ForbiddenError,
  NotFoundError,
  MethodNotAllowedError,
  NotAcceptableError,
  ProxyAuthenticationError,
  RequestTimeoutError,
  ConflictError,
  GoneError,
  LengthRequiredError,
  PreconditionFailedError,
  PayloadTooLargeError,
  UriTooLongError,
  UnsupportedMediaTypeError,
  RangeNotSatisfiableError,
  MisdirectedRequestError,
  UnprocessableEntityError,
  LockedError,
  FailedDependencyError,
  TooEarlyError,
  UpgradeRequiredError,
  PreconditionRequiredError,
  TooManyRequestsError,
  RequestHeaderError,
  LegalReasonsError,
  InternalServerError,
  NotImplementedError,
  BadGatewayError,
  ServiceUnavailableError,
  GatewayTimeoutError,
  HttpNotSupportedError,
  VariantAlsoNegotiatesError,
  InsufficientStorageError,
  LoopDetectedError,
  NotExtendedError,
  NetworkAuthenticationRequiredError
};
