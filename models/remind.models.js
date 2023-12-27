const db = require("../db");

// constructor
class reminder {
  constructor(reminders) {
    this.reminders = reminders;
  }
}
// create reminder
exports.create = (req, result) => {
  db.query(
    `INSERT INTO "reminder" (reminders , id) 
      VALUES ('${req.reminders}' ,'${req.id}')`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        return;
      }

      console.log("Reminder is created successfully: ", res);
    }
  );
};

// get all reminder
exports.getAll = (req, result) => {
  db.query(`SELECT * FROM "reminder"`, (err) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
  });
};

// Delete a reminder
exports.delete = (id, result) => {
  db.query(`DELETE FROM reminder WHERE id =  ( '${id}' )`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found user with the id
      result({ kind: "not_found" }, null);
      return;
    }
    console.log(`reminder is deleted with id: ${id}`);
    result(null, res);
  });
};

// Update a reminder
exports.updateReminder = (result) => {
  db.query(
    `UPDATE "reminder" (reminders) 
      SET  ('${req.tasks}')`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }
    }
  );
};
