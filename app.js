const net = require('net')
const { createReadStream } = require('fs')

var readStream = createReadStream('./data.txt');


const server = net.createServer((socket) => {
  readStream.on('open', () => {
    console.log('Stream opened...')
  })
  readStream.on('data', chunk => {
    socket.write(chunk)
  })
  readStream.on('end', () => {
    socket.end('stream closed')
  })
})

server.listen(59090)
