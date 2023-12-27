const db = require("../db");

// constructor
class Remind {
  constructor(remind) {
    this.remind = remind;
  }
}
// create reminder
exports.create = (req, result) => {
  db.query(
    `INSERT INTO "Remind" (remind) 
      VALUES ('${req.Remind}')`,
    (err) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
    }
  );
};

// get all reminder
exports.getAll = (req, result) => {
  db.query(`SELECT * FROM "Remind"`, (err) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
  });
};

// Delete a reminder
exports.delete = (id, result) => {
  db.query("DELETE FROM Remind WHERE id = ?", id, (err, res) => {
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
  });
};

// Update a reminder
exports.updateReminder = (result) => {
  db.query(
    `UPDATE "Remind" (Remind) 
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
