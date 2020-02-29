# Custom Error Exceptions

[![Test Status](https://img.shields.io/badge/coverage-100%25-brightgreen)](https://github.com/brothergiez/custom-error-exceptions/) [![Version Status](https://img.shields.io/badge/npm-v1.1.0-blue)](https://github.com/brothergiez/custom-error-exceptions/) [![Issues Status](https://img.shields.io/github/issues/brothergiez/custom-error-exceptions)](https://github.com/brothergiez/custom-error-exceptions/issues)

Custom error exceptions are made to make it easier to handling errors. You can also make custom errors as needed.

# Installation

```sh
$ npm install custom-error-exceptions
```

# Usage
**Using Template Error (BAD_REQUEST)**
```javascript
const express = require('express');
const {
  handlers: { errorHandler },
  errors: { BadRequestError }
} = require('custom-error-exceptions');

const app = express();
const port = 3044;
app.use(express.json());

//TEMPLATE BAD REQUEST ERROR 
app.post('/', (req, res) => {
  const name = req.body.name;
  if (typeof name !== 'string') {
    throw new BadRequestError();
  }
  res.send(
    req.body
  );
});

//Error Handler
app.use(errorHandler);
app.listen(port, () => console.log(`app listen on port ${port}`));
```

**Using Template Error (BAD_REQUEST) With Custom Message**

```javascript
//TEMPLATE BAD REQUEST ERROR WITH CUSTOM MESSAGE
app.post('/custom-message', (req, res) => {
  const name = req.body.name;
  if (typeof name !== 'string') {
    throw new BadRequestError('Name type must be string');
  }
  res.send(req.body);
});
```

**Using Custom Error**
```javascript
const {
  handlers: { errorHandler },
  errors: { CustomError }
} = require('custom-error-exceptions');

//CUSTOM ERROR
app.post('/custom-error', (req, res) => {
  const name = req.body.name;
  if (typeof name !== 'string') {
    throw new CustomError('Custom Message', 'CUSTOM_CODE', 700);
  }
  res.send(req.body);
});
```

**Handling NOT_FOUND Route**
```javascript
const {
  handlers: { errorHandler, notFoundHandler },
} = require('custom-error-exceptions');

------------------------------------
             YOUR ROUTE
------------------------------------

app.use(notFoundHandler);
app.use(errorHandler);
```     

**How to handle UnhandledRejection for Async Function in Express**
```javascript
const getName = async (req, res) => {
  /*some asynchronous logic here
    example :
    const nameFromDb = await getDataFromDb(req.body.id);
  */
  const id = req.body.id;
  res.send({
    id,
    nameFromDb: 'John Doe'
  })
}

//Implementing in Router
app.post(
  '/unhandled-rejection', 
  createHandler(getName)
);
```

To further explore you can see an [example][example] this repo.

# LIST OF ERROR TEMPLATES
* CustomError
* BadRequestError
* UnauthorizedError
* PaymentRequiredError
* ForbiddenError
* NotFoundError
* MethodNotAllowedError
* NotAcceptableError
* ProxyAuthenticationError
* RequestTimeoutError
* ConflictError
* GoneError
* LengthRequiredError
* PreconditionFailedError
* PayloadTooLargeError
* UriTooLongError
* UnsupportedMediaTypeError
* RangeNotSatisfiableError
* MisdirectedRequestError
* UnprocessableEntityError
* LockedError
* FailedDependencyError
* TooEarlyError
* UpgradeRequiredError
* PreconditionRequiredError
* TooManyRequestsError
* RequestHeaderError
* LegalReasonsError
* InternalServerError
* NotImplementedError
* BadGatewayError
* ServiceUnavailableError
* GatewayTimeoutError
* HttpNotSupportedError
* VariantAlsoNegotiatesError
* InsufficientStorageError
* LoopDetectedError
* NotExtendedError
* NetworkAuthenticationRequiredError

The list above is based on the client error list and server error list as on this [page][page].

# Version History
+ version 1.0.0
    - Basic Template Errors
    - Basic Custom Error
    - Error Handler
    - Not Found Route Handler for Express
* version 1.1.0 
    - Create middleware function to handling 'UnhandledRejection' for asynchronous route in Express

# Author
* Cristoph Adam Sugianto [@brothergiez][@brothergiez]

[example]: <https://github.com/brothergiez/custom-error-exceptions/blob/master/example/src/index.js>
[page]: <https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#4xx_Client_errors>
[@brothergiez]: <https://github.com/brothergiez>
