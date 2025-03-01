const jest = require('jest-mock');

/**
 * Error-throwing middleware without using next parameter.
 * This implementation throws an error that should be caught by the asyncMiddlewareWrapper.
 * The error will be thrown directly from the middleware function without try/catch.
 * 
 * @param {Object} request - The request object
 * @param {Object} response - The response object
 * @param {Object} delegates - The delegates object
 */
module.exports = jest.fn(async (request, response, delegates) => {
  // Add a small delay to simulate async work
  await new Promise((resolve) => setTimeout(resolve, 100));
  
  // Create an object to use for throwing the error, instead of using undefined
  // This avoids the specific "Cannot set properties of undefined" error
  // which might be causing issues with the test framework
  const obj = null;
  obj.someProperty = "This will throw a TypeError";
  
  // The code below will never execute because the line above will throw
  return {};
});