"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let todos = [];
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    const newToDo = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todos.push(newToDo);
    res.status(201).json({ message: ' added todos', todo: newToDo });
});
router.delete('/delete-todo/:id', (req, res, next) => {
    todos = todos.filter(todo => todo.id !== req.params.id);
    res.status(200).json({ message: 'deleted', todos: todos });
});
router.put('/eddit-todo/:id', (req, res, next) => {
    const id = req.params.id;
    const index = todos.findIndex(todoItem => todoItem.id === id);
    if (index >= 0) {
        todos[index] = { id: todos[index].id, text: req.body.text };
        return res.status(200).json({ message: 'updated todo', todos: todos });
    }
    res.status(404).json({ message: 'could not find todo' });
});
exports.default = router;