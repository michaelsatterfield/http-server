//node built in module for requests
const http = require("http");

const PORT = 5000;

const friends = [
  {
    id: 0,
    name: "Sir Isaac Newton",
  },
  {
    id: 1,
    name: "Nikola Tesla",
  },
  {
    id: 2,
    name: "Albert Einstein",
  },
];

//create server  ....req and res are 'streams'; callback function
const server = http.createServer((req, res) => {
  const items = req.url.split("/");
  //endpoint /friends...items at index 1 of "/"
  if (req.method === "POST" && items[1] === "friends") {
    req.on("data", (data) => {
      const friend = data.toString();
      console.log("Request:", friend);
    });
  } else if (req.method === "GET" && items[1] === "friends") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    if (items.length === 3) {
      //convert 'items[2]' to number from a string
      const friendIndex = Number(items[2]);
      res.end(JSON.stringify(friends[friendIndex]));
    } else {
      res.end(JSON.stringify(friends));
    }
  } else if (req.method === "GET" && items[1] === "/message") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<ul>");
    res.write("<li> Hello Isaac</li>");
    res.write("<li> What are your thoughts on astronomy</li>");
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else {
    //404 page not found message if path  doesn't exist
    res.statusCode = 404;
    res.end;
  }
});

//takes port number and a callback
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
