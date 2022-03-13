const express = require('express');

const app = express();

let members = require('./members');

// 미들웨어
app.use(express.json());

// GET
app.get('/api/members', (req, res) => {
  const { team } = req.query;
  if (team) {
    const teamMembers = members.filter(m => m.team === team);
    res.send(teamMembers);
  } else {
    res.send(members);
  }
});

app.get('/api/members/:id', (req, res) => {
  const { id } = req.params;
  const teamMembers = members.find(m => m.id === Number(id));

  if (teamMembers) {
    res.send(teamMembers);
  } else {
    res.status(404).send({ message: 'There is no member with the id' });
  }
});

// POST
app.post('/api/members', (req, res) => {
  const newMember = req.body;
  members.push(newMember);
  res.send(newMember);
});

// PUT
app.put('/api/members/:id', (req, res) => {
  const { id } = req.params;
  const newInfo = req.body;
  const member = members.find(m => m.id === Number(id));
  if (member) {
    Object.keys(newInfo).forEach(prop => member[prop] = newInfo[prop]);
    res.send(member);
  } else {
    res.status(404).send({ message: 'There is no member with the id' });
  }
})

// DELETE
app.delete('/api/members/:id', (req, res) => {
  const { id } = req.params;
  const memberCount = members.length;
  members = members.filter(m => m.id !== Number(id));
  if (members.length < memberCount) {
    res.send({ message: 'Deleted' });
  } else {
    res.status(404).send({ message: 'There is no member with the id' });
  }
})

app.listen(3000, () => {
  console.log('Server is listening...');
});