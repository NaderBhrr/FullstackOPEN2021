// The custom function for more visible log message during debugging

const cli = (title, message) => {
  console.info(`---=============================================---`);
  console.info(`<< ${title} >> \n\n`, message);
  console.info(`---=============================================---`);
};

export default cli;
