const db = require("../db");
const reminder = require("../models/remind.models.js");

// create reminder
exports.create = async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).send({
        message: "This can't be empty!",
      });
      return;
    }
    const data = await reminder.create(req.body);
    res.status(200).json({
      success: true,
      message: "Reminder  has been created successfully",
      data: data,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Error occurred while creating the Reminder .",
    });
  }
};

// get all reminders
exports.getAll = (req, res) => {
  const id = req.query.id;
  reminder.getAll(id, (err, data) => {
    if (err)
      res.status(500).send({
        message: "Some error occurred while retrieving reminder.",
      });
    else res.send(data);
  });
};

// Delete a reminder
exports.delete = (req, res) => {
  reminder.delete(req.params.id, (err, data) => {
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

    const data = await reminder.create(req.body);
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
