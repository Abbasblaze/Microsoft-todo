const db = require("../db");

const Task = require("../models/myDay.models.js");

// create task (W)
exports.create = async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).send({
        message: "This can't be empty!",
      });
      return;
    }
    const data = await Task.create(req.body);
    res.status(200).json({
      success: true,
      message: "Task created successfully",
      data: data,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Error occurred while creating the task.",
    });
  }
};

// get all task
exports.getAll = (req, res) => {
  Task.getAll(req.params.id, (err, data) => {
    if (err) {
      console.error("Error:", err);
      return res.status(500).json({
        message: `Error retrieving task with id ${req.params.id}.`,
        error: err,
      });
    }

    res.json(data);
  });
};

// Delete a task (W)
exports.delete = (req, res) => {
  Task.delete(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found task with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete task with id " + req.params.id,
        });
      }
    } else res.send({ message: `task is deleted successfully!` });
  });
};

// Update a task (W)
exports.updateTask = async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
      return;
    }

    const data = await Task.create(req.body);
    res.status(200).json({
      success: true,
      message: "Task updated successfully",
      data: data,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Error occurred while updating the Task.",
    });
  }
};

// Find a single task by Id (W)
exports.getById = (req, res) => {
  Task.getById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        return res.status(404).json({
          message: `No task with id ${req.params.id}.`,
        });
      } else {
        return res.status(500).json({
          message: "Error retrieving task with id " + req.params.id,
        });
      }
    }

    res.json(data);
  });
};
