let express = require('express');
let app = express();
require('dotenv').config()

console.log("Hello World")

app.use("/public", express.static(__dirname + "/public"));

app.get('/', (req, res) => {
  let absolutePath = __dirname + '/views/index.html';
  res.sendFile(absolutePath);
})

app.get('/json', (req, res) => {
  if(process.env.MESSAGE_STYLE === 'uppercase'){
    res.json({message : 'HELLO JSON'});
  } else {
    res.json({message : 'Hello json'})
  }
})




































 module.exports = app;
