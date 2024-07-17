const http = require('http')
let reqcount = 0
const server = http.createServer((request, response) => {
  reqcount++
  response.write('asd' + reqcount)
  response.end()
})

server.listen(3000)