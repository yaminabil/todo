const express = require("express");
const Todo = require("../models/Todo");
const router = express.Router();

// index route for not completed tasks
router.get("/", (req, res) => {
  Todo.find({ completed: false }, (err, foundTodos) => {
    if (!err) {
      res.status(200).json(foundTodos);
    } else {
      res.status(400).json(err);
    }
  });
});

//index route for completed tasks
router.get("/completed", (req, res) => {
  Todo.find({ completed: true }, (err, foundTodos) => {
    if (!err) {
      res.status(200).json(foundTodos);
    } else {
      res.status(400).json(err);
    }
  });
});

//creat route

router.post("/new", (req, res) => {
  const todo = req.body.todo;
  Todo.create(todo, (err, createdToDo) => {
    if (!err) {
      res.status(200).json(createdToDo);
    } else {
      res.status(400).json(err);
    }
  });
});

// delete route
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Todo.findByIdAndDelete(id, (err, deletedTodo) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json({ message: "deleted perfectly" });
    }
  });
});
//delte route
router.delete("/completed/:id", (req, res) => {
  const id = req.params.id;
  Todo.findByIdAndDelete(id, (err, deletedTodo) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json({ message: "deleted perfectly" });
    }
  });
});

//edit route
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const todo = req.body.todo;
  Todo.findByIdAndUpdate(id, todo, { new: true }, (err, updatedTodo) => {
    if (!err) {
      res.status(200).json(updatedTodo);
    } else {
      res.status(400).json(err);
    }
  });
});

module.exports = router;
