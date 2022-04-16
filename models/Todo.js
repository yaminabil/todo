const { Schema, model } = require("../config/database");

const todoSchema = Schema(
  {
    title: String,
    completed: Boolean,
  },
  {
    timestamps: true,
  }
);

const Todo = model("Todo", todoSchema);
module.exports = Todo;
