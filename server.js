const express = require('express');
const path = require('path');

const app = express();

const server = require('http').createServer(app);

app.use(express.static(path.join(__dirname,'/public')));

app.get('/',(req,res)=>{
    res.send('Hello World');
});


server.listen(3000)
