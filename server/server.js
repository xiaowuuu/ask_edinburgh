const express = require('express');
const app = express();
app.get('/', function(req, res){
  res.send('hello')
})

app.listen(9000, function(){
  console.log('app running on port 9000')
})