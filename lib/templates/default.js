const CustomError = require('./custom');
const { codes, statusCodes, messages } = require('../constants');

const BadRequestError = class extends CustomError {
  constructor(message) {
    super(message || messages.BAD_REQUEST, codes.BAD_REQUEST, statusCodes.BAD_REQUEST);
  }
};

const UnauthorizedError = class extends CustomError {
  constructor(message) {
    super(message || messages.UNAUTHORIZED, codes.UNAUTHORIZED, statusCodes.UNAUTHORIZED);
  }
};

const PaymentRequiredError = class extends CustomError {
  constructor(message) {
    super(
      message || messages.PAYMENT_REQUIRED,
      codes.PAYMENT_REQUIRED,
      statusCodes.PAYMENT_REQUIRED
    );
  }
};

const ForbiddenError = class extends CustomError {
  constructor(message) {
    super(message || messages.FORBIDDEN, codes.FORBIDDEN, statusCodes.FORBIDDEN);
  }
};

const NotFoundError = class extends CustomError {
  constructor(message) {
    super(message || messages.NOT_FOUND, codes.NOT_FOUND, statusCodes.NOT_FOUND);
  }
};

const MethodNotAllowedError = class extends CustomError {
  constructor(message) {
    super(
      message || messages.METHOD_NOT_ALLOWED,
      codes.METHOD_NOT_ALLOWED,
      statusCodes.METHOD_NOT_ALLOWED
    );
  }
};

const NotAcceptableError = class extends CustomError {
  constructor(message) {
    super(message || messages.NOT_ACCEPTABLE, codes.NOT_ACCEPTABLE, statusCodes.NOT_ACCEPTABLE);
  }
};

const ProxyAuthenticationError = class extends CustomError {
  constructor(message) {
    super(
      message || messages.PROXY_AUTHENTICATION_REQUIRED,
      codes.PROXY_AUTHENTICATION_REQUIRED,
      statusCodes.PROXY_AUTHENTICATION_REQUIRED
    );
  }
};

const RequestTimeoutError = class extends CustomError {
  constructor(message) {
    super(message || messages.REQUEST_TIMEOUT, codes.REQUEST_TIMEOUT, statusCodes.REQUEST_TIMEOUT);
  }
};

const ConflictError = class extends CustomError {
  constructor(message) {
    super(message || messages.CONFLICT, codes.CONFLICT, statusCodes.CONFLICT);
  }
};

const GoneError = class extends CustomError {
  constructor(message) {
    super(message || messages.GONE, codes.GONE, statusCodes.GONE);
  }
};

const LengthRequiredError = class extends CustomError {
  constructor(message) {
    super(
      message || messages.LENGTH_REQUIRED,
      codes.LENGTH_REQUIRED,
      statusCodes.LENGTH_REQUIRED
    );
  }
};

const PreconditionFailedError = class extends CustomError {
  constructor(message) {
    super(
      message || messages.PRECONDITION_FAILED,
      codes.PRECONDITION_FAILED,
      statusCodes.PRECONDITION_FAILED
    );
  }
};

const PayloadTooLargeError = class extends CustomError {
  constructor(message) {
    super(
      message || messages.PAYLOAD_TOO_LARGE,
      codes.PAYLOAD_TOO_LARGE,
      statusCodes.PAYLOAD_TOO_LARGE
    );
  }
};

const UriTooLongError = class extends CustomError {
  constructor(message) {
    super(
      message || messages.URI_TOO_LONG,
      codes.URI_TOO_LONG,
      statusCodes.URI_TOO_LONG
    );
  }
};

const UnsupportedMediaTypeError = class extends CustomError {
  constructor(message) {
    super(
      message || messages.UNSUPPORTED_MEDIA_TYPE,
      codes.UNSUPPORTED_MEDIA_TYPE,
      statusCodes.UNSUPPORTED_MEDIA_TYPE
    );
  }
};

const RangeNotSatisfiableError = class extends CustomError {
  constructor(message) {
    super(
      message || messages.RANGE_NOT_SATISFIABLE,
      codes.RANGE_NOT_SATISFIABLE,
      statusCodes.RANGE_NOT_SATISFIABLE
    );
  }
};

const MisdirectedRequestError = class extends CustomError {
  constructor(message) {
    super(
      message || messages.MISDIRECTED_REQUEST,
      codes.MISDIRECTED_REQUEST,
      statusCodes.MISDIRECTED_REQUEST
    );
  }
};

const UnprocessableEntityError = class extends CustomError {
  constructor(message) {
    super(
      message || messages.UNPROCESSABLE_ENTITY,
      codes.UNPROCESSABLE_ENTITY,
      statusCodes.UNPROCESSABLE_ENTITY
    );
  }
};

const LockedError = class extends CustomError {
  constructor(message) {
    super(message || messages.LOCKED, codes.LOCKED, statusCodes.LOCKED);
  }
};

const FailedDependencyError = class extends CustomError {
  constructor(message) {
    super(
      message || messages.FAILED_DEPENDENCY,
      codes.FAILED_DEPENDENCY,
      statusCodes.FAILED_DEPENDENCY
    );
  }
};

const TooEarlyError = class extends CustomError {
  constructor(message) {
    super(message || messages.TOO_EARLY, codes.TOO_EARLY, statusCodes.TOO_EARLY);
  }
};

const UpgradeRequiredError = class extends CustomError {
  constructor(message) {
    super(
      message || messages.UPGRADE_REQUIRED,
      codes.UPGRADE_REQUIRED,
      statusCodes.UPGRADE_REQUIRED
    );
  }
};

const PreconditionRequiredError = class extends CustomError {
  constructor(message) {
    super(
      message || messages.PRECONDITION_REQUIRED,
      codes.PRECONDITION_REQUIRED,
      statusCodes.PRECONDITION_REQUIRED
    );
  }
};

const TooManyRequestsError = class extends CustomError {
  constructor(message) {
    super(
      message || messages.TOO_MANY_REQUESTS,
      codes.TOO_MANY_REQUESTS,
      statusCodes.TOO_MANY_REQUESTS
    );
  }
};

const RequestHeaderError = class extends CustomError {
  constructor(message) {
    super(
      message || messages.REQUEST_HEADER_FIELDS_TOO_LARGE,
      codes.REQUEST_HEADER_FIELDS_TOO_LARGE,
      statusCodes.REQUEST_HEADER_FIELDS_TOO_LARGE
    );
  }
};

const LegalReasonsError = class extends CustomError {
  constructor(message) {
    super(
      message || messages.UNAVAILABLE_FOR_LEGAL_REASONS,
      codes.UNAVAILABLE_FOR_LEGAL_REASONS,
      statusCodes.UNAVAILABLE_FOR_LEGAL_REASONS
    );
  }
};

const InternalServerError = class extends CustomError {
  constructor(message) {
    super(
      message || messages.INTERNAL_SERVER_ERROR,
      codes.INTERNAL_SERVER_ERROR,
      statusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

const NotImplementedError = class extends CustomError {
  constructor(message) {
    super(message || messages.NOT_IMPLEMENTED, codes.NOT_IMPLEMENTED, statusCodes.NOT_IMPLEMENTED);
  }
};

const BadGatewayError = class extends CustomError {
  constructor(message) {
    super(message || messages.BAD_GATEWAY, codes.BAD_GATEWAY, statusCodes.BAD_GATEWAY);
  }
};

const ServiceUnavailableError = class extends CustomError {
  constructor(message) {
    super(
      message || messages.SERVICE_UNAVAILABLE,
      codes.SERVICE_UNAVAILABLE,
      statusCodes.SERVICE_UNAVAILABLE
    );
  }
};

const GatewayTimeoutError = class extends CustomError {
  constructor(message) {
    super(message || messages.GATEWAY_TIMEOUT, codes.GATEWAY_TIMEOUT, statusCodes.GATEWAY_TIMEOUT);
  }
};

const HttpNotSupportedError = class extends CustomError {
  constructor(message) {
    super(
      message || messages.HTTP_VERSION_NOT_SUPPORTED,
      codes.HTTP_VERSION_NOT_SUPPORTED,
      statusCodes.HTTP_VERSION_NOT_SUPPORTED
    );
  }
};

const VariantAlsoNegotiatesError = class extends CustomError {
  constructor(message) {
    super(
      message || messages.VARIANT_ALSO_NEGOTIATES,
      codes.VARIANT_ALSO_NEGOTIATES,
      statusCodes.VARIANT_ALSO_NEGOTIATES
    );
  }
};

const InsufficientStorageError = class extends CustomError {
  constructor(message) {
    super(
      message || messages.INSUFFICIENT_STORAGE,
      codes.INSUFFICIENT_STORAGE,
      statusCodes.INSUFFICIENT_STORAGE
    );
  }
};

const LoopDetectedError = class extends CustomError {
  constructor(message) {
    super(message || messages.LOOP_DETECTED, codes.LOOP_DETECTED, statusCodes.LOOP_DETECTED);
  }
};

const NotExtendedError = class extends CustomError {
  constructor(message) {
    super(message || messages.NOT_EXTENDED, codes.NOT_EXTENDED, statusCodes.NOT_EXTENDED);
  }
};

const NetworkAuthenticationRequiredError = class extends CustomError {
  constructor(message) {
    super(
      message || messages.NETWORK_AUTHENTICATION_REQUIRED,
      codes.NETWORK_AUTHENTICATION_REQUIRED,
      statusCodes.NETWORK_AUTHENTICATION_REQUIRED
    );
  }
};

module.exports = {
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
