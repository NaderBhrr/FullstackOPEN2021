const errorHandler = (error, req, res, next) => {
  console.error(error.message);

  console.log('Error Name: \n', error.name);

  next(error);
};

export default errorHandler;
