let express = require('express');
let app = express();

console.log("Hello World")

let filePath = __dirname + '/public'

app.use(filePath, express.static(__dirname + '/public/style.css '));

app.get('/', (req, res) => {
  let absolutePath = __dirname + '/views/index.html';
  res.sendFile(absolutePath);
})




































 module.exports = app;
