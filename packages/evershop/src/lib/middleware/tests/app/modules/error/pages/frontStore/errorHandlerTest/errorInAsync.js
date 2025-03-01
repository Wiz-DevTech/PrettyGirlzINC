/**
 * Middleware that simulates an asynchronous operation and throws an error.
 * @param {Object} request - The request object.
 * @param {Object} response - The response object.
 */
module.exports = async (request, response) => {
  try {
    // Simulate an asynchronous operation with a delay
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await delay(100); // Reduced delay for faster testing

    // Intentionally throw an error
    throw new TypeError("Exception in middleware errorInAsync: An error occurred");
  } catch (error) {
    // Handle the error internally
    console.error("Error in errorinAsync middleware:", error.message);

    // Send a response to the client
    response.status(500).json({
      error: "Internal Server Error",
      message: error.message,
    });
  }
};