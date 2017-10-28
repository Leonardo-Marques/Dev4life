const express = require('express');
const app = express();
const porta = 3000;

app.use(express.static('./'));

app.get('*', function(req, res) {
  res.sendfile('./index.html');
});

app.listen(porta, ()=>{
  console.log('started: '+ porta);
});
