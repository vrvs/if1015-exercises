const dgram = require('dgram')

const server = dgram.createSocket('udp4')

server.on('message', (msg, _) => {
    console.log('Operation: ' + msg.toString())
    var result = solve(msg.toString())
    console.log('Answer: ' + result)
    server.send(result, 4312, 'localhost', (err) => {})
})

server.bind(4321)
console.log('Server is listening at port 4321')

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