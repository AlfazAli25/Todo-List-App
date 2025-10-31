const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/ToDoList");

const TodoSchema = mongoose.Schema({
  task : String,
  completed : {
    type : Boolean,
    default : false
  }
});

module.exports = mongoose.model("TodoModel", TodoSchema);