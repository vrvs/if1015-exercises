const dgram = require('dgram')
const readline = require('readline')

const client = dgram.createSocket('udp4');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.addListener('line', line => {
    client.send(line, 4321, 'localhost', (err) => {});
})

client.on('message', (msg, _) => {
    console.log('server: ' + msg.toString())
})

client.bind(4312)
console.log('Client is listening at port 4312')

