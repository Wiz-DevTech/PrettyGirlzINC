const jest = require('jest-mock');

/**
 * Error-throwing middleware without using next parameter.
 * This will throw an error that should be caught by the error handler.
 * 
 * @param {Object} request - The request object
 * @param {Object} response - The response object
 * @param {Object} delegates - The delegates object
 */
module.exports = jest.fn(async (request, response, delegates) => {
  // Add a small delay to simulate async work
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await delay(100); // Use a shorter delay for faster tests
  
  // Throw a more specific error that's easier to identify
  throw new TypeError("Test error in async middleware without next");
});