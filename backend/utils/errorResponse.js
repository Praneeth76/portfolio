// /utils/errorResponse.js
class ErrorResponse extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;

    // Capture the stack trace (to better debug errors)
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ErrorResponse;
