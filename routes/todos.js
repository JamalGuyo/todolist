const express = require('express'),
router = express.Router();
const db = require('../models'),
helpers = require('../helpers/todos');

router.route('/')
.get(helpers.getTodos)
.post(helpers.createTodos)  

router.route('/:todoId')
.get(helpers.getTodo)
.put(helpers.updateTodo)
.delete(helpers.deleteTodo)

module.exports = router;