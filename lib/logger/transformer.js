const transformer = (req, res) => {
  delete req.body.password;
  req.headers.authorization = '<redacted>';
  req.headers.token = '<redacted>';
  const transformed = {
    method: req.method,
    path: req.originalUrl,
    statusCode: res.statusCode,
    ip: req.ip,
    requestInfo: {
      request: {
        header: req.headers,
        body: req.body
      },
      response: {
        header: res.header,
        statusCode: res.statusCode
      }
    }
  };
  return transformed;
}