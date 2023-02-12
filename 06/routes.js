const carController = require('./controller')

const router = {
  'get': async res => res.end(JSON.stringify(await carController.getAll$()))
}

module.exports = router