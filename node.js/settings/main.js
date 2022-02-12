// @ts-check
// Formatting, Linting, Type Checking
// Formatting : prettier
// Linting : ESLint
// Type checking : TypeScript

console.log('Hello, world!')

const x = 1
console.log(x)

const string = 'Hello'
const result = Math.log(string)
console.log(result)

const http = require('http')

const server = http.createServer((req, res) => {
  res.statusCode = res.end('Hello!')
})

const PORT = 4000
server.listen(PORT, () => {
  console.log(`The server is listening at port: ${PORT}.`)
})
