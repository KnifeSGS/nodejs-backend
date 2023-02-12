const jsonClass = require('./json')

const JSONHandler = new jsonClass()

module.exports = class POSTHandler {
  constructor() { }

  response(req, res) {
    return new Promise((resolve, reject) => {
      const urlParts = req.url.split('/')
      const entity = urlParts[1]


      let requestData = ''
      req.on('data', data => {
        requestData += data
      })
      req.on('end', async () => {
        const entityList = await JSONHandler.getAll(entity)
        const lastId = entityList[entityList.length - 1].id + 1
        requestData = JSON.parse(requestData)
        requestData.id = parseInt(lastId)
        await JSONHandler.create(entity, requestData)

        res.end(JSON.stringify(requestData))
        resolve('')

      })
    })
  }
}