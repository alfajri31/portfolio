const http = require('http');
const express = require('express');
const routes = require('./routes/route');
const app = express();

app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(routes);
  
server = http.Server(app);

const PORT = process.env.port||'3000';

server.listen(3000);