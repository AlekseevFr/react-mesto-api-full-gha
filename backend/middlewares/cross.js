const allowedCors = ['http://alekseevfr.students.nomoredomains.work', 'http://api.alekseevfr.students.nomoredomains.work', 'https://alekseevfr.students.nomoredomains.work', 'https://api.alekseevfr.students.nomoredomains.work', 'http://localhost:3000'];
function handleCross(req, res, next) {
  const { origin } = req.headers;
  if (allowedCors.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Credentials', true);
  }
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
