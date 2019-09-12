const express = require('express');
const app = express();
var cors = require('cors');

app.use(cors());

const username = 'MT247'
const password = 'JEE'

app.get('/', (req,res) => {
  res.send('hello people')
})
app.get('/login/:username/:password', (req,res) => {
  const User = req.params.username;
  const Pass  = req.params.password;
  if(username === User && password === Pass){
    return res.send('Login Successfull!');
  }else if (User === ''|| Pass === ''){
    return res.send('Please Enter Username and Password') 
  }else{
    return res.send('Invalid Username Or Password')
  }
})

const Port =  process.env.PORT || 8000
app.listen(Port, console.log(`Listening to ${Port}`))
