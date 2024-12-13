const http = require('http')
const server = http.createServer()
server.on('request', (req, res) => {
    res.setHeader('Content-type', 'text/plain;charset=utf-8')
    res.end('Welcome use Node.js!')
})

server.listen(3000, () => {
    console.log("launch success.");
})