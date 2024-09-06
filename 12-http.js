const http = require("http");

// req: incoming request from client
// res: what we send back to the client
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Welcome to our homepage");
    }
    if (req.url === "/about") {
        res.end("About page");
    }
    res.end(`
        <h1>Oops!</h1><p>We can't seem to find the page you're looking for</p>
        <a href="/">Homepage</a>`);
});

server.listen(5000);
