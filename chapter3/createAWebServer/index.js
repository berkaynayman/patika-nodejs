const http = require('http')

const server = http.createServer((req, res) => {
    console.log('Bir istek gönderildi..')

    const url = req.url
    console.log(url);
    switch (url) {
        case "/":
                res.writeHead(200, { "Content-Type": "text/html"})
                res.write("<h1>INDEX PAGE</h1>")
            break;
        case "/about":
                res.writeHead(200, { "Content-Type": "text/html"})
                res.write("<h1>ABOUT PAGE</h1>")
            break;
        case "/contact":
                res.writeHead(200, { "Content-Type": "text/html"})
                res.write("<h1>CONTACT PAGE</h1>")
            break;
        default:
                res.writeHead(404, { "Content-Type": "text/html"})
                res.write("<h1>404 Page is not found</h1>")
            break;
    }

    //res.write('Hello World')
    res.end()
})

const port = 3000

server.listen(port, () => {
    console.log(`Sunucu port ${port} de başlatıldı.`)
})