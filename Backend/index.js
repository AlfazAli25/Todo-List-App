const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const TodoModel = require("./models/TodoModel");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/add", (req, res) => {
  const task = req.body.task;
  TodoModel.create({
    task
  })
  .then(result => res.json(result))
  .catch(err => res.json(err));
})

app.get("/get", (req, res) => {
  TodoModel.find()
  .then(result => res.json(result))
  .catch(err => res.json(err));
})

app.put("/update/:id", (req, res) => {
  const {id} = req.params;
  TodoModel.findOneAndUpdate({_id : id}, {completed : true})
  .then((result) => res.json(result))
  .catch((err) => res.json(err));
})

app.delete("/delete/:id", (req, res) => {
  const {id} = req.params;
  TodoModel.findOneAndDelete({_id: id})
  .then((result) => res.json(result))
  .catch((err) => res.json(err));
})

app.listen(5000);