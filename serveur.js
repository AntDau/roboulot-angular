const express = require("express");
const path = rrequire('path');

const app = express();

app.use(express.static(__dirname + '/dist/zoboulot'));

app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname+'/dist/zoboulot/index.html'));
})

app.listen(process.env.PORT);