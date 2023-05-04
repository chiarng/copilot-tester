// define error responses when users try to request a teapot

function onRequest(request, response, modules) {
  response.body = "I'm a teapot";
  response.complete(418);
}

exports.onRequest = onRequest;

// Explain the above code 
// 1. onRequest is a function that takes 3 arguments: request, response, modules
// 2. onRequest is a function that defines the response body as a string
// 3. onRequest is a function that defines the response status code as 418
//  3a. 418 is the HTTP status code for "I'm a teapot"
// 4. onRequest is a function that completes the response
// 5. onRequest is a function that exports the response
//  5a. exports is a global object that is available to all modules

