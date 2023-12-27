const db = require("../db");

// constructor
class Important {
  constructor(imptask) {
    this.imptask = imptask;
  }
}

exports.create = (req, result) => {
  db.query(
    `INSERT INTO "Important" (id, imptask) 
    VALUES ('${req.id}', '${req.impTask}')`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        return;
      }

      console.log("Important Task has been created successfully: ", res);
    }
  );
};

// get all importantTask
exports.getAll = (req, result) => {
  db.query(`SELECT * FROM "Important"`, (err) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
  });
};

// Delete a importantTask
exports.delete = (id, result) => {
  db.query(`DELETE FROM "Important" WHERE id = ( '${id}' )`, (err, res) => {
    if (err) {
      console.error("error: ", err);
      result(err, null);
      return;
    }

    if (res.affectedRows === 0) {
      // Task with the specified id not found
      result({ kind: "not_found" }, null);
      return;
    }

    console.log(`Deleted task with id: ${id}`);
    result(null, res);
  });
};

// Update a importantTask
exports.updateImportantTask = (result) => {
  db.query(
    `UPDATE "Important" (impTask) 
    SET  ('${req.impTask}')`,
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

// Find a single importantTask by Id
exports.getById = (req, result) => {
  db.query(
    `SELECT * FROM "Important                    " WHERE id = ${req}`,
    (err, res) => {
      if (err) {
        result({ kind: "not_found" }, null);
      } else {
        return result(null, res.rows);
      }
    }
  );
};
