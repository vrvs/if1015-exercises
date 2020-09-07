const net = require('net')
const readline = require('readline')

const client = new net.Socket()
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

client.connect(4321, 'localhost', () => {
    console.log('Connected to the server')
    rl.addListener('line', line => {
        client.write(line)
    })
    client.on('data', data => {
        console.log('server: ' + data.toString())
    })
})
