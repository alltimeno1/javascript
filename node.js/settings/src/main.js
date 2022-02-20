// @ts-check
// Formatting, Linting, Type Checking
// Formatting: Prettier
// Linting: ESLint
// Type checking: TypeScript

// 작동 여부 확인
// eslint-disable-next-line no-console
// console.log("Hello, world!")

// var x = 1

// exports = 3

// const someString = "Hello"
// const result = Math.log(someString)
// console.log(result)

const http = require("http")

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.end("Hello!")
})

const PORT = 4000
server.listen(PORT, () => {
  console.log(`The server is listening at port: ${PORT}.`)
})
