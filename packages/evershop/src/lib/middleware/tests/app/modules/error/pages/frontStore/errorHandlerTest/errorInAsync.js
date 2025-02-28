/**
 * Middleware that simulates an asynchronous operation and throws an error.
 * @param {Object} request - The request object.
 * @param {Object} response - The response object.
 * @param {Function} next - The next function to pass control to the next middleware.
 */
module.exports = async (request, response, next) => {
  // Simulate an asynchronous operation with a delay
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await delay(3000); // Wait for 3 seconds

  try {
    // Intentionally throw an error by setting a property on `undefined`
    undefined.a = 1; // This will throw a TypeError
  } catch (error) {
    // Pass the error to the next middleware or error handler
    next(error);
  }
};