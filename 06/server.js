const http = require('http')
const router = require('./routes')

const port = 8080

const server = http.createServer(async (req, res) => {
  router[req.method.toLowerCase()](res)
})

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})