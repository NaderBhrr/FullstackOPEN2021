import morgan from 'morgan';

const logger = () => {
  morgan.token('body', (req, res) => {
    return req.method === 'POST' ? JSON.stringify(req.body) : null;
  });

  return morgan((tokens, req, res) => {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'),
      '-',
      tokens['response-time'](req, res),
      'ms',
      tokens.body(req, res),
    ].join(' ');
  });
};

export default logger;
