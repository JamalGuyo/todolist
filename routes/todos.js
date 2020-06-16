const express = require('express'),
router = express.Router();
const db = require('../models');

router.get('/', (req,res) => {
    db.Todo.find()
    .then(todos => res.json(todos))
    .catch(err => console.log(err))
})

module.exports = router;