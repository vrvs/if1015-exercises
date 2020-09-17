const dgram = require('dgram');
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const server = dgram.createSocket('udp4')

server.on('message', (msg, _) => {
    console.log('client: ' + msg.toString())
})

rl.addListener('line', line => {
    server.send(line, 4312, 'localhost', (err) => {});
})

server.bind(4321)
console.log('Server is listening at port 4321')