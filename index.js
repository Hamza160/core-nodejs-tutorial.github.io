const http = require('http');
const date = require('./date');
const url = require('url');
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.write(`<h1>Hell From Node Core Server</h1>`);
    res.write(`${date.myDateTime()}`);
    res.write(`<h1>${req.url}</h1>`);
    const query = url.parse(req.url, true).query;
    res.write(`<h1>${query.fname}</h1>`)
    res.end();
});

server.listen(5000);