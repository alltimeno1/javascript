fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text())
  .then((result) => {
    const users = JSON.parse(result);
    console.log(users.length);
    users.forEach(user => console.log(user.name));
  });


// GET
fetch('https://learn.codeit.kr/api/members')
  .then((response) => response.json())
  .then(datas => {
    datas.forEach(data => console.log(data.name))
  });

// POST
const newMember = {
  name: 'Jerry',
  email: 'jerry@gmail.com',
  department: 'engineering',
}

fetch('https://learn.codeit.kr/api/members', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newMember),
})
  .then(response => response.text())
  .then(result => console.log(result));

// PUT
const Member = {
  name: 'Alice',
  email: 'alice@gmail.com',
  department: 'marketing',
}

fetch('https://learn.codeit.kr/api/members/2', {
  method: 'PUT',
  body: JSON.stringify(Member),
})
  .then(response => response.text())
  .then(result => console.log(result));

//DELETE
fetch('https://learn.codeit.kr/api/members/2', {
  method: 'DELETE',
})
  .then(response => response.text())
  .then(result => console.log(result));

const Member2 = {
  email: 'alice@gmail.com',
}

fetch('https://learn.codeit.kr/api/members/2', {
  method: 'PATCH',
  body: JSON.stringify(Member2),
})
  .then(response => response.text())
  .then(result => console.log(result));