const path = require('path');
const express = require('express');
// const hbs = require('hbs');

const publicPath = path.join(__dirname, '../public');

const port = process.env.PORT || 3000;
var app = express();

app.use(express.static(publicPath));

app.get('/about', (req,res) => {
  var newReq = JSON.stringify(res,undefined,2);
  res.send({newReq});

});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
