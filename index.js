const express = require('express');
const app = express();
const cors = require('cors');
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let users = [
  {
      "email":'',
      "fullName": '',
      "password":'',
  }
]

//Register
app.post('/register', (req, res) => {
  const newUser = {
    email: req.body.email,
    fullName:req.body.fullName,
    password:req.body.password,
  };
  if (!newUser.email || !newUser.fullName || !newUser.password) {
    res.status(400).json({ msg: 'Please include a name, email and password'});
}
else {
    users.push(newUser);
    res.json({result: 'Registration has been successful'},
    );
}
});

// Login
app.put('/login', (req, res) => {
  const updateUser =  {
    email: req.body.email,
    password: req.body.password
  }
  if ((updateUser.email == newUser.email) && (updateUser.password == newUser.password)) {
    return res.json({result: 'Login has been succesfull'});
  }
  else  
  return res.status(400).json({ msg: 'No user with that information'});
}) 


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})