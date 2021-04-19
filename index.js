const express = require('express');
const app = express();
const port = 4000;
const users = require('./Users');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

function handleRegister() {

}

function handleLogin() {

}

app.post('/', (req, res) => {
  const newUser = {
    email: req.body.name,
    fullName:req.body.fullName,
    password:req.body.password,
    status: 'active'
  };

  app.put('/', (req, res) => {
    res.json()
  })

  users.push(newUser);
  res.json(users);
});