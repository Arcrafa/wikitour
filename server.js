const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/wikitour'));
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+
    '/dist/wikitour/index.html'));});
app.listen(process.env.PORT || 8080);
