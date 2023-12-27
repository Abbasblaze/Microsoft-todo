const db = require("../db");
const Task = require("../models/remind.models.js");

// create reminder
exports.create = async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).send({
        message: "This can't be empty!",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "reminder created successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Error occurred while creating the reminder.",
    });
  }
};

// get all reminders
exports.getAll = (req, res) => {
  const id = req.query.id;
  Task.getAll(id, (err, data) => {
    if (err)
      res.status(500).send({
        message: "Some error occurred while retrieving reminder.",
      });
    else res.send(data);
  });
};

// Delete a reminder
exports.delete = (req, res) => {
  Task.delete(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found reminder with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete reminder with id " + req.params.id,
        });
      }
    } else res.send({ message: `reminder is deleted successfully!` });
  });
};

// Update a reminder
exports.updateReminder = async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
      return;
    }

    const data = await Remind.create(req.body);
    res.status(200).json({
      success: true,
      message: "reminder updated successfully",
      data: data,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Error occurred while updating the reminder.",
    });
  }
};
