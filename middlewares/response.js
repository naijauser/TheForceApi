

class Response {
  successResponse (code = 200, message, data) {
    return {
      success: true,
      code,
      message,
      data
    }
  }

  errorResponse (code = 400, errorMessage) {
    return {
      success: false,
      code,
      errorMessage
    }
  }
}

module.exports = new Response();