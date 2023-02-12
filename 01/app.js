const http = require('http')
const port = 3333
const getClass = require('./handlers/get')
const postClass = require('./handlers/post')

const getHandler = new getClass()
const postHandler = new postClass()

const server = http.createServer(async (req, res) => {
  if (req.url === '/favicon.ico') {
    return res.end('{}')
  }
  if (/^\/$/.test(req.url)) {
    return res.end('{"Error": "no entity."}')
  }

  switch (req.method.toLowerCase()) {
    case 'get': await getHandler.response(req, res)
      break

    case 'post': await postHandler.response(req, res)
      break

    default:
      res.end('{"Error": "unrecognized method."}')
  }
})

server.listen(port, (err) => {
  if (err) {
    return console.error('ERROR: ', err.message)
  }
  console.log(`Server is running at http://localhost:${port}`)
})