const net = require('net')
const { port = 7070, host = '127.0.0.1' } = require('./configs/config')
const client = new net.Socket()

client.connect(port, host, function () {
  console.log('Connected')
  client.write('Hello From Client ' + client.address().address)
})

client.on('data', function (data) {
  console.log('Server Says : ' + data)
})

client.on('close', function () {
  console.log('Connection closed')
})
