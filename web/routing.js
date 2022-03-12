const http = require('http');

const express = require('express');

const app = express();

const users = ['Tom', 'Andy', 'Jessica', 'Paul'];

// http
let server = http.createServer((request, response) => {
  if (request.url === '/') {
    response.end('<h1>Hello world!</h1>');
  } else if (request.url === '/users') {
    response.end(`<h1>${users}</h1>`);
  } else if (request.url.split('/')[1] === 'users') {
    const userIdx = request.url.split('/')[2];
    const userName = users[userIdx - 1];

    response.end(`<h1>${userName}</h1>`);
  } else {
    response.end('<h1>Page Not Available</h1>');
  }
});
server.listen(3000);

// express
app.get('/', (request, response) => {
  response.end('<h1>Hello world!</h1>');
});

app.get('/users', (request, response) => {
  response.end(`<h1>${users}</h1>`);
});

app.get('/users/:id', (request, response) => {
  const userName = users[request.params.id - 1];
  response.end(`<h1>${userName}</h1>`);
});

app.get('*', (request, response) => {
  response.end('<h1>Page Not Available</h1>');
});

app.listen(3000);
