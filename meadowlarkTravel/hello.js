const http = require("http");
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    //normalize url by removing querystring, optional
    //trailing slash, and making it lower case
    const path = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();
    switch (path) {
        case "":
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("Home Page");
            break;
        case "/about":
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("About");
            break;
        default:
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("About");
            break;
    }
});

server.listen(port, () => console.log(`Server started on port ${port}: ` +
    "press Ctrl-C to terminate..."));