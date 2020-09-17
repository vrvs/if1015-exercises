const net = require('net')
const readline = require('readline')

const server = net.createServer(socket => {
    console.log('A new client is connected')
    socket.on('end', () => {
        console.log('A client disconnected')
    })
    socket.on('data', data => {
        console.log('Operation: ' + data.toString())
        var result = solve(data.toString())
        console.log('Answer: ' + result)
        socket.write(result)
    })
})

server.listen(4321, 'localhost', () => {
    console.log('Server is listening at port 4321')
})

function solve(s) {
    try {
        if (s.indexOf('+') != -1) {
            var nums = getNumbers(s, s.indexOf('+'))
            return (nums[0] + nums[1]).toString()
        } else if (s.indexOf('*') != -1) {
            var nums = getNumbers(s, s.indexOf('*'))
            return (nums[0] * nums[1]).toString()
        } else if (s.indexOf('-') != -1) {
            var nums = getNumbers(s, s.indexOf('-'))
            return (nums[0] - nums[1]).toString()
        } else if (s.indexOf('/') != -1) {
            var nums = getNumbers(s, s.indexOf('/'))
            return (nums[0] / nums[1]).toString()
        } else {
            return "Undefinied"
        }
    } catch (e) {
        return "Undefinied"
    }
}

function getNumbers(s, i) {
    var num1 = s.slice(0, i)
    var num2 = s.slice(i+1)
    return [parseInt(num1), parseInt(num2)]
}