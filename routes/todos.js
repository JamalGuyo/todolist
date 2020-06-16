const express = require('express'),
router = express.Router();
const db = require('../models');

router.get('/', (req,res) => {
    db.Todo.find()
    .then(todos => res.json(todos))
    .catch(err => console.log(err))
})
router.post('/', (req,res)=>{
    db.Todo.create(req.body)
    .then(newTodo => res.status(201).json(newTodo))
    .catch(err => console.log(err));
})
router.get('/:todoId', (req, res) => {
    db.Todo.findById(req.params.todoId)
    .then(todo => res.json(todo))
    .catch(err => console.log(err));
})
router.put('/:todoId', (req, res) => {
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
    .then(todo => res.json(todo))
    .catch(err => console.log(err))
})
router.delete('/:todoId', (req, res) => {
    db.Todo.deleteOne({_id: req.params.todoId})
    .then(() => res.json({message: 'We deleted it'}))
    .catch(err => console.log(err));
})
module.exports = router;