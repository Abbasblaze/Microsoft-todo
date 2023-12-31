const db = require("../db");

// constructor
class Search {
  constructor(search) {
    this.search = search;
  }
}

// search apis
exports.search = (id, tasks) => {
  db.query(
    `SELECT * FROM task
    WHERE tasks LIKE '%your%'
    AND
    SELECT * FROM reminder
    WHERE reminders LIKE '%need%'
    AND
    SELECT * FROM plannedtasks
    WHERE plantasks LIKE '%planned%'
    AND
    SELECT * FROM assigned
    WHERE assignedtask LIKE '%today , new%'
    AND
    SELECT * FROM Important
    WHERE imptask LIKE '%complete%';
    `,
    (err, res) => {
      if (err) {
        console.error("Error executing query:", err);
        return err;
      }

      console.log("Search result:", res);
    }
  );
};
