const fs = require("fs");
const http = require("http");
const url = require("url");

////////
//  SERVER
const server = http
  .createServer((req, res) => {
    const pathName = req.url;

    if (pathName === "/" || pathName === "/overview") {
      res.end("This Is Overview");
    } else if (pathName === "/product") {
      res.end("This Is product");
    } else {
      res.writeHead(404,{
        'Content-type' : 'text/html',
        
      });
      res.end("<h1>Page Is Not found</h1>");
    }
  })
  .listen(3030, "127.0.0.1", () => {
    console.log("Listing to req on prot 3030");
  });
