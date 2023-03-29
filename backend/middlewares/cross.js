function handleCross(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  const { method } = req;
  const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';
  const requestHeaders = req.headers['access-control-request-headers'];
  if (method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.setHeader('Access-Control-Allow-Headers', requestHeaders);
    return res.end();
  }
  return next();
}

module.exports = { handleCross };
