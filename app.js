var express = require('express');
var todoController = require('./controller/todoController');

var app = express();

app.set('view engine', 'ejs');

app.use(express.static('./public'));

todoController(app);

app.listen(3000);
console.log('server is running with post 3000');