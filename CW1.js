/** 
 *Instructions*

Using the previous example as a guide, create an app that has two web servers.
>One that listens on port 7000 and one that listens on port 7500.
>The one listening on port 7000 will always tell the user something good about themselves.
>The one listening on 7500 will always tell the user something bad about themselves.
Make sure you create a Github repo and commit this code!

_Bonus:_
Look for other ways to expand what your server can do. As possibilities:
Generate the good/bad phrase randomly from a list of predefined phrases
Use the `twitter` package inside the response to also return a random tweet
 */

var http = require("http");


var PORT1 = 7000;
var PORT2 = 7500;


// We need two differerent functions to handle requests. 
function handleRequestOne(req, res) {
    response.end("You're a javascript mastermind.");
}

function handleRequestTwo(req, res) {
    response.end("You stink.");
}

/**
 * Solution
 

// We require/import the HTTP module
var http = require("http");

// =====================================================================

// Then define the ports we want to listen to
var PORTONE = 7000;
var PORTTWO = 7500;

// =====================================================================

// We need two different functions to handle requests, one for each server.
function handleRequestOne(request, response) {
  response.end("You're a JavaScript mastermind!");
}

function handleRequestTwo(request, response) {
  response.end("You smell.");
}

// =====================================================================

// Create our servers
var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);

// =====================================================================

// Starting our servers
serverOne.listen(PORTONE, function() {

  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:%s", PORTONE);
});

serverTwo.listen(PORTTWO, function() {

  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:%s", PORTTWO);
});
 */