const errorHandler = (error, req, res, next) => {
  console.dir(error.errors);

  next(error);
};

export default errorHandler;
