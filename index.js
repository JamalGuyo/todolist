const express = require('express'),
bodyParser = require('body-parser'),
app = express(),
port = process.env.PORT || 8080;

// module imports
const todoRoutes = require('./routes/todos');
// configs
app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname+'/views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api/todos', todoRoutes);
// 
app.get('/', (req, res)=>{
    res.sendFile('index.html');
})

app.listen(port, () => console.log(`todolist app listening on port ${port}...`));
