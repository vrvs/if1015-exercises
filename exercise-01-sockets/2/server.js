const net = require('net')

const map = {}

var ID = function () {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
};

const server = net.createServer(socket => {
    socket.write('== What is your name? ==')
    const id = ID()
    map[id] = {'first': '', 'second': socket}
    socket.on('end', () => {
        const name = map[id]['first']
        if (name !== '') {
            console.log('== ' + name + ' left in the message group.' + ' ==')
            delete map[id]
            for (var key in map) {
                const s = map[key]['second']
                s.write('== ' + name + ' left in the message group.' + ' ==')
            }
        }
    })
    socket.on('data', data => {
        const msg = data.toString()
        const name = map[id]['first']
        if (name === '') {
            if (msg === '') {
                socket.write('== What is your name? ==')
            } else {
                map[id]['first'] = msg
                console.log('== ' + msg + ' entered in the message group.' + ' ==')
                for (var key in map) {
                    const s = map[key]['second']
                    s.write('== ' + msg + ' entered in the message group.' + ' ==')
                }
            }
        } else {
            console.log(name + ': ' + data.toString())
            for (var key in map) {
                const s = map[key]['second']
                if (id !== key) {
                    s.write(name + ': ' + data.toString())
                }
            }
        }
    })
})
server.listen(4321, 'localhost', () => {
    console.log('Server is listening at port 4321')
})