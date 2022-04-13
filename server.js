const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

const fs = require('fs');



/**
const users = [
  { name: 'Marta' },
  { name: 'Paco'  },
  { name: 'Lucas' },
  { name: 'Lucía' },
  { name: 'Mateo' }
];
**/

app.use(cors());

app.get('/users', (req, res) => {
  const users = JSON.parse(fs.readFileSync('/tmp/users.json', 'utf-8'));
  res.json(users);
});

app.listen(port, () => {
  console.log('Ready!', port);
});

