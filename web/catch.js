fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json(), error => console.log(error))
  .then(result => console.log(result));

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .catch(error => console.log(error))
  .then(result => console.log(result));

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(undefined, error => console.log(error))
  .then(result => console.log(result));

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(result => {
    console.log(result);
    throw new Error('test');
  })
  .catch(error => console.log(error.name, error.message))
  .finally(() => console.log('exit'));