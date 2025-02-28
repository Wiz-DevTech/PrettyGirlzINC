const jest = require('jest-mock');

module.exports = jest.fn(async (request, response, delegates, next) => {
  try {
    // Simulate some asynchronous operation, like loading a product from a database
    // For example:
    // const product = await ProductModel.findById(request.params.id);
    // if (!product) {
    //   throw new Error('Product not found');
    // }
    // response.locals.product = product;

    // Call next() to proceed to the next middleware
    next();
  } catch (error) {
    // Pass the error to the next error-handling middleware
    next(error);
  }
});