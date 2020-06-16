const express = require('express'),
app = express(),
port = process.env.PORT || 8080;

app.get('/', (req,res) => {
    res.json("{name: 'John Doe'}");
});

app.listen(port, () => console.log(`todolist app listening on port ${port}...`));
