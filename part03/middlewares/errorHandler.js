const errorHandler = (error, req, res, next) => {
  console.error('Error MESSAGE: \n', error.message);
  console.log('Error Name: \n', error.name);

  if (res.headersSent) return next(error);

  if (error.name === 'CastError') {
    return res.status(400).json({ error: 'malformatted id' });
  } else if (error.name === 'ValidationError') {
    return res.status(400).json({ error: error.message });
  } else {
    res
      .status(400)
      .json({ error: 'Request can not be processed, missing information ' });
  }

  next(error);
};

export default errorHandler;
