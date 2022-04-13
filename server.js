const express = require('express');
const app = express();
const port = 3000;

const users = [
  { name: 'Marta' },
  { name: 'Paco'  }
];

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(port, () => {
  console.log('Ready!', port);
});

