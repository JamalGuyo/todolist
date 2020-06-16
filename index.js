const express = require('express'),
bodyParser = require('body-parser'),
app = express(),
port = process.env.PORT || 8080;

// module imports
const todoRoutes = require('./routes/todos');
// configs
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api/todos', todoRoutes);


app.listen(port, () => console.log(`todolist app listening on port ${port}...`));
