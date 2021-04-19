const express = require('express');
const app = express();
const cors = require('cors');
const port = 4000;
const users = require('./Users');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//Register
app.post('/register', (req, res) => {
  const newUser = {
    email: req.body.email,
    fullName:req.body.fullName,
    password:req.body.password,
  };
  if (!newUser.email || !newUser.fullName || !newUser.password) {
    return res.status(400).json({ msg: 'Please include a name, email and password'});
}
else {
    return res.json({result: 'Registration has been successful'});
}
});

/*/ Login
app.put('/login', (req, res) => {
  const updateUser = req.body;
  users.forEach(user => {
    if (user.mail === parseInt(req.params.mail)) {

    }
  });
  
  res.json({result: 'Login has been succesfull'})
}) */


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})