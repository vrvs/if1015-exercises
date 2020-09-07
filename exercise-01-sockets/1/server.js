const net = require('net')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const server = net.createServer(socket => {
    console.log('A new client is connected')
    socket.on('end', () => {
        console.log('A client disconnected')
    })
    socket.on('data', data => {
        console.log('client: ' + data.toString())
    })
    rl.addListener('line', line => {
        socket.write(line)
    })
})
server.listen(4321, 'localhost', () => {
    console.log('Server is listening at port 4321')
})