//node built in module for requests
const http = require("http");

const PORT = 5000;

//create server  ....req and res are 'streams'; callback function
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain",
  });
  res.end("hello! sir isaac newton is a friend!");
});

//takes port number and a callback
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
