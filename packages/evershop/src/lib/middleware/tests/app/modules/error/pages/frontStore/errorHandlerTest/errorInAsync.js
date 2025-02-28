/**
 * Middleware that simulates an asynchronous operation and throws an error.
 * @param {Object} request - The request object.
 * @param {Object} response - The response object.
 * @param {Function} next - The next function to pass control to the next middleware.
 */
module.exports = async (request, response, next) => {
  try {
    // Simulate an asynchronous operation with a delay
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await delay(100); // Reduced delay for faster testing
    
    // Intentionally throw an error
    throw new TypeError("Exception in middleware errorInAsync: next is not a function");
  } catch (error) {
    // Pass the error to the next middleware or error handler
    return next(error);
  }
};