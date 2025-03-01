const jest = require('jest-mock');

module.exports = jest.fn(async (request, response, delegates) => {
  // Simulate an asynchronous operation with a delay
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await delay(3000);
  
  // This will cause an error when executed
  undefined.a = 1;
  
  // No need for try/catch or next() since the asyncMiddlewareWrapper
  // will catch the error and handle it
});